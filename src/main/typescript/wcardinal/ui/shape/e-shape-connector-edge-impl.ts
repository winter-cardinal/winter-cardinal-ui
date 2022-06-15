/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, ObservablePoint, Point } from "pixi.js";
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
	protected static WORK_UPDATE_LOCAL?: Point;

	protected _parent: EShapeConnector;
	protected _onChange: () => void;
	protected _acceptor: EShapeConnectorEdgeAcceptor;
	protected _localIdRequired: number;
	protected _localId: number;
	protected _local: IPoint;
	protected _margin: number;
	protected _lockCount: number;
	protected _isAcceptorChanged: boolean;
	protected _isLocalChanged: boolean;
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
		this._margin = 0;
		this._lockCount = 0;
		this._isAcceptorChanged = false;
		this._isLocalChanged = false;
		this._isOtherChanged = false;
	}

	lock(): void {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isAcceptorChanged = false;
			this._isLocalChanged = false;
			this._isOtherChanged = false;
		}
	}

	unlock(): void {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isLocalChanged) {
				this.onLocalChange();
			} else if (this._isAcceptorChanged) {
				this.onAcceptorChange();
			} else if (this._isOtherChanged) {
				this.onOtherChange();
			}
		}
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
		localX?: number,
		localY?: number
	): this {
		this.lock();
		this._acceptor.set(shape, edge);
		if (localX != null) {
			this._local.x = localX;
		}
		if (localY != null) {
			this._local.y = localY;
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
		return manager.addResource(
			`[${shapeUuid},${edgeId},${local.x},${local.y},${this._margin}]`
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
		}
		const localIdRequired = this._localIdRequired;
		if (this._localId !== localIdRequired) {
			this._localId = localIdRequired;

			const acceptor = this._acceptor;
			const acceptorShape = acceptor.shape;
			const acceptorEdge = acceptor.edge;
			if (acceptorShape != null && acceptorEdge != null) {
				const edge = EShapeAcceptors.get(acceptorShape.type).get(acceptorEdge);
				if (edge) {
					const work = (EShapeConnectorEdgeImpl.WORK_UPDATE_LOCAL ??= new Point());
					const size = acceptorShape.size;
					const pivot = acceptorShape.transform.pivot;
					work.set(pivot.x + size.x * edge.x, pivot.y + size.y * edge.y);
					acceptorShape.toGlobal(work, work);
					const parent = this._parent;
					const parentParent = parent.parent;
					if (parentParent) {
						parent.updateTransform();
						parentParent.toLocal(work, undefined, work, true);
					}
					this._local.copyFrom(work);
				}
			}
		}
		return this;
	}

	onAcceptorChange(): void {
		if (0 < this._lockCount) {
			this._isAcceptorChanged = true;
			return;
		}
		this._localIdRequired += 1;
		this.fit();
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
