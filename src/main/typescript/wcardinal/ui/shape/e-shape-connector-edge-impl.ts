/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, ObservablePoint, Point } from "pixi.js";
import { EShape } from "./e-shape";
import { EShapeConnectorEdge } from "./e-shape-connector-edge";
import { EShapeContainer } from "./e-shape-container";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export interface EShapeConnectorEdgeImplParent {
	readonly parent: EShapeContainer | EShape | null;
	updateTransform(): void;
}

export class EShapeConnectorEdgeImpl implements EShapeConnectorEdge {
	protected static WORK_UPDATE_LOCAL?: Point;

	protected _parent: EShapeConnectorEdgeImplParent;
	protected _onChange: () => void;
	protected _shape: EShape | null;
	protected _position: IPoint;
	protected _id: number;
	protected _localId: number;
	protected _local: IPoint;
	protected _lockCount: number;
	protected _isChanged: boolean;
	protected _isLocalChanged: boolean;

	constructor(parent: EShapeConnectorEdgeImplParent, onChange: () => void) {
		this._parent = parent;
		this._onChange = onChange;
		this._shape = null;
		this._position = new ObservablePoint((): void => {
			this.onChange();
		}, undefined);
		this._id = 0;
		this._local = new ObservablePoint((): void => {
			this.onLocalChange();
		}, undefined);
		this._localId = 0;
		this._lockCount = 0;
		this._isChanged = false;
		this._isLocalChanged = false;
	}

	lock(): void {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isChanged = false;
			this._isLocalChanged = false;
		}
	}

	unlock(): void {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isLocalChanged) {
				this.onLocalChange();
			} else if (this._isChanged) {
				this.onChange();
			}
		}
	}

	get id(): number {
		return this._id;
	}

	get shape(): EShape | null {
		return this._shape;
	}

	set shape(shape: EShape | null) {
		this.set(shape, undefined, undefined);
	}

	get position(): IPoint {
		return this._position;
	}

	get localId(): number {
		return this._localId;
	}

	get local(): IPoint {
		return this._local;
	}

	set(shape?: EShape | null, position?: IPoint, local?: IPoint): this {
		this.lock();

		if (shape !== undefined && shape !== this._shape) {
			this._shape = shape;
			this.onChange();
		}

		if (position != null) {
			this._position.copyFrom(position);
		}

		if (local != null) {
			this._local.copyFrom(local);
		}

		this.unlock();
		return this;
	}

	copy(source: EShapeConnectorEdge): this {
		return this.set(source.shape, source.position, source.local);
	}

	isEqual(other: EShapeConnectorEdge): boolean {
		if (this._shape === other.shape) {
			const position = this._position;
			const otherPosition = other.position;
			if (position.x === otherPosition.x && position.y === otherPosition.y) {
				const local = this._local;
				const otherLocal = other.local;
				return local.x === otherLocal.x && local.y === otherLocal.y;
			}
		}
		return false;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const shape = this._shape;
		const shapeUuid = shape ? shape.uuid : null;
		const position = this._position;
		const local = this._local;
		return manager.addResource(
			`[${shapeUuid},${position.x},${position.y},${local.x},${local.y}]`
		);
	}

	fit(forcibly?: boolean): this {
		if (forcibly) {
			this._id += 1;
		}
		const id = this._id;
		if (this._localId !== id) {
			this._localId = id;

			const shape = this._shape;
			if (shape != null) {
				const work = (EShapeConnectorEdgeImpl.WORK_UPDATE_LOCAL ??= new Point());
				const size = shape.size;
				const position = this._position;
				work.set(size.x * position.x, size.y * position.y);
				shape.toGlobal(work, work);
				const parent = this._parent;
				parent.updateTransform();
				const parentParent = parent.parent;
				if (parentParent) {
					parent.updateTransform();
					parentParent.toLocal(work, undefined, work, false);
				}
				this._local.copyFrom(work);
			}
		}
		return this;
	}

	protected onChange(): void {
		if (0 < this._lockCount) {
			this._isChanged = true;
			return;
		}
		this._id += 1;
		this.fit();
	}

	protected onLocalChange(): void {
		if (0 < this._lockCount) {
			this._isLocalChanged = true;
			return;
		}
		this._id += 1;
		this._localId = this._id;
		this._onChange();
	}
}
