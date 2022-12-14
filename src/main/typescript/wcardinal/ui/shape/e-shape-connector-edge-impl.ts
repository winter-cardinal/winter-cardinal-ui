/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, ObservablePoint } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeAcceptors } from "./e-shape-acceptors";
import { EShapeConnector } from "./e-shape-connector";
import { EShapeConnectorEdge, EShapeConnectorEdgeSerialized } from "./e-shape-connector-edge";
import { EShapeConnectorEdgeAcceptor } from "./e-shape-connector-edge-acceptor";
import { EShapeConnectorEdgeAcceptorImpl } from "./e-shape-connector-edge-acceptor-impl";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeUuidMapping } from "./e-shape-uuid-mapping";

export class EShapeConnectorEdgeImpl implements EShapeConnectorEdge {
	protected static WORK_MATRIX?: Matrix;

	protected _parent: EShapeConnector;
	protected _onChange: () => void;
	protected _acceptor: EShapeConnectorEdgeAcceptor;
	protected _localIdRequired: number;
	protected _localId: number;
	protected _local: IPoint;
	protected _normalIdRequired: number;
	protected _normalId: number;
	protected _normal: IPoint;
	protected _margin: number;
	protected _lockCount: number;
	protected _isAcceptorChanged: boolean;
	protected _isLocalChanged: boolean;
	protected _isNormalChanged: boolean;
	protected _isOtherChanged: boolean;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._onChange = onChange;
		this._acceptor = new EShapeConnectorEdgeAcceptorImpl(this);

		this._local = new ObservablePoint((): void => {
			this.onLocalChange();
		}, undefined);
		this._localIdRequired = 0;
		this._localId = 0;

		this._normal = new ObservablePoint((): void => {
			this.onNormalChange();
		}, undefined);
		this._normalIdRequired = 0;
		this._normalId = 0;

		this._margin = 0;

		this._lockCount = 0;
		this._isAcceptorChanged = false;
		this._isLocalChanged = false;
		this._isNormalChanged = false;
		this._isOtherChanged = false;
	}

	lock(): void {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isAcceptorChanged = false;
			this._isLocalChanged = false;
			this._isNormalChanged = false;
			this._isOtherChanged = false;
		}
	}

	unlock(): void {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			let isChanged = false;

			if (this._isLocalChanged) {
				this._localIdRequired += 1;
				this._localId = this._localIdRequired;
				isChanged = true;
			}

			if (this._isNormalChanged) {
				this._normalIdRequired += 1;
				this._normalId = this._normalIdRequired;
				isChanged = true;
			}

			if (this._isOtherChanged) {
				isChanged = true;
			}

			if (this._isAcceptorChanged) {
				if (!this._isLocalChanged) {
					this._localIdRequired += 1;
				}
				if (!this._isNormalChanged) {
					this._normalIdRequired += 1;
				}
				if (this.doFit()) {
					isChanged = false;
				}
			}

			if (isChanged) {
				this._onChange();
			}
		}
	}

	get parent(): EShapeConnector {
		return this._parent;
	}

	get acceptor(): EShapeConnectorEdgeAcceptor {
		return this._acceptor;
	}

	get local(): IPoint {
		return this._local;
	}

	get localId(): number {
		return this._localId;
	}

	get normal(): IPoint {
		return this._normal;
	}

	get normalId(): number {
		return this._normalId;
	}

	get margin(): number {
		return this._margin;
	}

	set margin(margin: number) {
		if (this._margin !== margin) {
			this._margin = margin;
			this.onOtherChange();
		}
	}

	set(
		shape?: EShape | null,
		edge?: string | null,
		margin?: number,
		x?: number,
		y?: number,
		nx?: number,
		ny?: number
	): this {
		this.lock();
		this._acceptor.set(shape, edge);

		const local = this._local;
		if (x != null && y != null) {
			local.set(x, y);
		} else if (x != null) {
			local.x = x;
		} else if (y != null) {
			local.y = y;
		}

		const normal = this._normal;
		if (nx != null && ny != null) {
			normal.set(nx, ny);
		} else if (nx != null) {
			normal.x = nx;
		} else if (ny != null) {
			normal.y = ny;
		}

		if (margin != null) {
			this.margin = margin;
		}

		this.unlock();
		return this;
	}

	copy(source: EShapeConnectorEdge): this {
		this.lock();
		this._acceptor.copy(source.acceptor);
		this._local.copyFrom(source.local);
		this._normal.copyFrom(source.normal);
		this.margin = source.margin;
		this.unlock();
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const acceptor = this._acceptor;
		const shape = acceptor.shape;
		const shapeUuid = shape ? shape.uuid : null;
		const edge = acceptor.edge;
		const edgeId = edge != null ? manager.addResource(edge) : -1;
		const local = this._local;
		const normal = this._normal;
		return manager.addResource(
			`[${shapeUuid},${edgeId},${local.x},${local.y},${this._margin},${normal.x},${normal.y}]`
		);
	}

	deserialize(
		resourceId: number,
		mapping: EShapeUuidMapping,
		manager: EShapeResourceManagerDeserialization
	): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapeConnectorEdgeSerialized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapeConnectorEdgeSerialized;
				manager.setExtension(resourceId, parsed);
			}
			let shape: EShape | null = null;
			const shapeUuid = parsed[0];
			if (shapeUuid != null) {
				shape = mapping.find(shapeUuid) || null;
			}
			this.lock();
			const acceptor = this._acceptor;
			acceptor.shape = shape;
			const edgeId = parsed[1];
			acceptor.edge = 0 <= edgeId && edgeId < resources.length ? resources[edgeId] : null;
			this._local.set(parsed[2], parsed[3]);
			const normalX = parsed[5];
			const normalY = parsed[6];
			const normal = this._normal;
			if (normalX != null && normalY != null) {
				normal.set(normalX, normalY);
			} else {
				normal.set(1, 0);
			}
			this.margin = parsed[4] || 0;
			this.unlock();
			if (shape) {
				shape.connector.add(this);
			}
		}
	}

	fit(forcibly?: boolean): this {
		if (forcibly) {
			this._localIdRequired += 1;
			this._normalIdRequired += 1;
		}
		this.doFit();
		return this;
	}

	protected doFit(): boolean {
		const localIdRequired = this._localIdRequired;
		const isLocalDirty = this._localId !== localIdRequired;
		const normalIdRequired = this._normalIdRequired;
		const isNormalDirty = this._normalId !== normalIdRequired;
		if (isLocalDirty || isNormalDirty) {
			this._localId = localIdRequired;
			this._normalId = normalIdRequired;

			const acceptor = this._acceptor;
			const acceptorShape = acceptor.shape;
			const acceptorEdge = acceptor.edge;
			if (acceptorShape != null && acceptorEdge != null) {
				const edge = EShapeAcceptors.get(acceptorShape.type).get(
					acceptorShape,
					acceptorEdge
				);
				if (edge) {
					const transform = this.toAcceptorTransform(acceptorShape);
					const a = transform.a;
					const b = transform.b;
					const c = transform.c;
					const d = transform.d;
					const tx = transform.tx;
					const ty = transform.ty;

					this.lock();
					if (isLocalDirty) {
						const size = acceptorShape.size;
						const pivot = acceptorShape.transform.pivot;
						const lx = pivot.x + size.x * edge.x;
						const ly = pivot.y + size.y * edge.y;
						this._local.set(a * lx + c * ly + tx, b * lx + d * ly + ty);
					}
					if (isNormalDirty) {
						const edgeNormal = edge.normal;
						const nx = edgeNormal.x;
						const ny = edgeNormal.y;
						const x = a * nx + c * ny;
						const y = b * nx + d * ny;
						const l = x * x + y * y;
						const normal = this._normal;
						if (0.000001 < l) {
							const f = 1 / Math.sqrt(l);
							normal.set(x * f, y * f);
						} else {
							normal.set(nx, ny);
						}
					}
					const result = this._isLocalChanged || this._isNormalChanged;
					this.unlock();
					return result;
				}
			}
		}
		return false;
	}

	protected toAcceptorTransform(shape: EShape): Matrix {
		shape.updateTransform();
		const parent = this._parent;
		const parentParent = parent.parent;
		if (parentParent) {
			parent.updateTransform();
			return (EShapeConnectorEdgeImpl.WORK_MATRIX ??= new Matrix())
				.copyFrom(parentParent.transform.worldTransform)
				.invert()
				.append(shape.transform.worldTransform);
		} else {
			return shape.transform.worldTransform;
		}
	}

	onAcceptorChange(): void {
		if (0 < this._lockCount) {
			this._isLocalChanged = false;
			this._isNormalChanged = false;
			this._isAcceptorChanged = true;
			return;
		}
		this.fit(true);
	}

	protected onLocalChange(): void {
		if (0 < this._lockCount) {
			this._isLocalChanged = true;
			return;
		}
		this._localIdRequired += 1;
		this._localId = this._localIdRequired;
		this._onChange();
	}

	protected onNormalChange(): void {
		if (0 < this._lockCount) {
			this._isNormalChanged = true;
			return;
		}
		this._normalIdRequired += 1;
		this._normalId = this._normalIdRequired;
		this._onChange();
	}

	protected onOtherChange(): void {
		if (0 < this._lockCount) {
			this._isOtherChanged = true;
			return;
		}
		this._onChange();
	}

	attach(): this {
		const shape = this._acceptor.shape;
		if (shape) {
			shape.connector.add(this);
		}
		return this;
	}

	detach(): this {
		const shape = this._acceptor.shape;
		if (shape) {
			shape.connector.remove(this);
		}
		return this;
	}
}
