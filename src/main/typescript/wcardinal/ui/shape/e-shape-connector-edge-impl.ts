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
import { EShapeAcceptorEdgeSide } from "./e-shape-acceptor-edge-side";

export class EShapeConnectorEdgeImpl implements EShapeConnectorEdge {
	protected static WORK_MATRIX?: Matrix;

	protected _parent: EShapeConnector;
	protected _onChange: () => void;
	protected _acceptor: EShapeConnectorEdgeAcceptor;
	protected _acceptorTransformNew: Matrix;
	protected _acceptorTransformOld: Matrix;
	protected _hasAcceptorTransformOld: boolean;
	protected _localIdRequired: number;
	protected _localId: number;
	protected _local: IPoint;
	protected _normalIdRequired: number;
	protected _normalId: number;
	protected _normal: IPoint;
	protected _side: EShapeAcceptorEdgeSide;
	protected _margin: number;
	protected _other: EShapeConnectorEdge | null;
	protected _lockCount: number;
	protected _isAcceptorChanged: boolean;
	protected _isLocalChanged: boolean;
	protected _isNormalChanged: boolean;
	protected _isOtherChanged: boolean;

	constructor(parent: EShapeConnector, onChange: () => void) {
		this._parent = parent;
		this._onChange = onChange;
		this._acceptor = new EShapeConnectorEdgeAcceptorImpl(this);
		this._acceptorTransformNew = new Matrix();
		this._acceptorTransformOld = new Matrix();
		this._hasAcceptorTransformOld = false;

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

		this._side = EShapeAcceptorEdgeSide.TOP;

		this._margin = 0;

		this._other = null;

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
				this._hasAcceptorTransformOld = false;
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

	get side(): EShapeAcceptorEdgeSide {
		return this._side;
	}

	set side(side: EShapeAcceptorEdgeSide) {
		if (this._side !== side) {
			this._side = side;
			this.onOtherChange();
		}
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

	get other(): EShapeConnectorEdge | null {
		return this._other;
	}

	set other(other: EShapeConnectorEdge | null) {
		this._other = other;
	}

	set(
		acceptorShape?: EShape | null,
		acceptorEdge?: string | null,
		acceptorX?: number | null,
		acceptorY?: number | null,
		margin?: number,
		x?: number,
		y?: number,
		nx?: number,
		ny?: number,
		side?: EShapeAcceptorEdgeSide
	): this {
		this.lock();
		this._acceptor.set(acceptorShape, acceptorEdge, acceptorX, acceptorY);

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

		if (side != null) {
			this.side = side;
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
		this.side = source.side;
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
		const side = this._side;
		return manager.addResource(
			`[${shapeUuid},${edgeId},${local.x},${local.y},${this._margin},${normal.x},${normal.y},${acceptor.x},${acceptor.y},${side}]`
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
			acceptor.x = parsed[7] ?? null;
			acceptor.y = parsed[8] ?? null;
			this._local.set(parsed[2], parsed[3]);
			const normalX = parsed[5];
			const normalY = parsed[6];
			const normal = this._normal;
			if (normalX != null && normalY != null) {
				normal.set(normalX, normalY);
			} else {
				normal.set(1, 0);
			}
			this.side = parsed[9] ?? EShapeAcceptorEdgeSide.TOP;
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
					const oat = this._acceptorTransformOld;
					const nat = this._acceptorTransformNew;
					this.toAcceptorTransform(acceptorShape, nat);

					const other = this._other;
					const isOtherDangling =
						this._hasAcceptorTransformOld &&
						other != null &&
						other.acceptor.shape == null;
					const work = (EShapeConnectorEdgeImpl.WORK_MATRIX ??= new Matrix());
					if (isOtherDangling) {
						oat.copyTo(work).invert().prepend(nat);
					}
					this._acceptorTransformNew = oat;
					this._acceptorTransformOld = nat;
					this._hasAcceptorTransformOld = true;

					this.lock();
					if (isLocalDirty) {
						const l = this._local;
						const olx = l.x;
						const oly = l.y;
						const size = acceptorShape.size;
						const pivot = acceptorShape.transform.pivot;
						const x = pivot.x + size.x * (acceptor.x ?? edge.x);
						const y = pivot.y + size.y * (acceptor.y ?? edge.y);
						const nlx = nat.a * x + nat.c * y + nat.tx;
						const nly = nat.b * x + nat.d * y + nat.ty;
						l.set(nlx, nly);

						if (isOtherDangling) {
							const ol = other.local;
							const oolx = ol.x;
							const ooly = ol.y;
							const nolx = work.a * oolx + work.c * ooly + work.tx;
							const noly = work.b * oolx + work.d * ooly + work.ty;
							const odx = oolx - olx;
							const ody = ooly - oly;
							const ndx = nolx - nlx;
							const ndy = noly - nly;
							const od = odx * odx + ody * ody;
							const nd = ndx * ndx + ndy * ndy;
							if (0.000001 < nd) {
								const f = Math.sqrt(od / nd);
								ol.set(nlx + ndx * f, nly + ndy * f);
							} else {
								ol.set(nolx, noly);
							}
						}
					}
					if (isNormalDirty) {
						const en = edge.normal;
						const enx = en.x;
						const eny = en.y;
						const nx = nat.a * enx + nat.c * eny;
						const ny = nat.b * enx + nat.d * eny;
						const sd = nx * nx + ny * ny;
						const n = this._normal;
						if (0.000001 < sd) {
							const f = 1 / Math.sqrt(sd);
							n.set(nx * f, ny * f);
						} else {
							n.set(enx, eny);
						}

						if (isOtherDangling) {
							const on = other.normal;
							const oonx = on.x;
							const oony = on.y;
							const nonx = work.a * oonx + work.c * oony;
							const nony = work.b * oonx + work.d * oony;
							const osd = nonx * nonx + nony * nony;
							if (0.000001 < osd) {
								const f = 1 / Math.sqrt(osd);
								on.set(nonx * f, nony * f);
							} else {
								on.set(oonx, oony);
							}
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

	protected toAcceptorTransform(shape: EShape, result: Matrix): Matrix {
		shape.updateTransform();
		const parent = this._parent;
		const parentParent = parent.parent;
		if (parentParent) {
			parent.updateTransform();
			return result
				.copyFrom(parentParent.transform.worldTransform)
				.invert()
				.append(shape.transform.worldTransform);
		} else {
			return result.copyFrom(shape.transform.worldTransform);
		}
	}

	onAcceptorChange(): void {
		if (0 < this._lockCount) {
			this._isLocalChanged = false;
			this._isNormalChanged = false;
			this._isAcceptorChanged = true;
			return;
		}
		this._hasAcceptorTransformOld = false;
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
