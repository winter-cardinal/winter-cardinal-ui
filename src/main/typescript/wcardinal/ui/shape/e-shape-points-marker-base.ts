/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, ObservablePoint } from "pixi.js";
import { EShapeDefaults } from "./e-shape-defaults";
import { EShapeFill } from "./e-shape-fill";
import { EShapePointsFormatted } from "./e-shape-points-formatted";
import { EShapePointsMarker, EShapePointsMarkerSerizlized } from "./e-shape-points-marker";
import { EShapePointsMarkerType } from "./e-shape-points-marker-type";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeFillImpl } from "./variant/e-shape-fill-impl";

export interface EShapePointsMarkerBaseParentParent {
	readonly id: number;
	readonly formatted: EShapePointsFormatted;
}

export interface EShapePointsMarkerBaseParent {
	readonly parent: EShapePointsMarkerBaseParentParent;
	onTypeChange(): void;
	onSizeChange(): void;
	onFillChange(): void;
}

export abstract class EShapePointsMarkerBase implements EShapePointsMarker {
	protected _parent: EShapePointsMarkerBaseParent;
	protected _lockCount: number;
	protected _isTypeChanged: boolean;
	protected _isSizeChanged: boolean;
	protected _isFillChanged: boolean;
	protected _type: EShapePointsMarkerType;
	protected _size: IPoint;
	protected _transform?: Matrix;
	protected _transformId: number;
	protected _fill: EShapeFill;

	constructor(parent: EShapePointsMarkerBaseParent) {
		this._parent = parent;
		this._lockCount = 0;
		this._isTypeChanged = false;
		this._isSizeChanged = false;
		this._isFillChanged = false;
		this._type = EShapePointsMarkerType.NONE;
		this._size = new ObservablePoint(
			(): void => {
				this.onSizeChange();
			},
			undefined,
			EShapeDefaults.SIZE_X * 0.15,
			EShapeDefaults.SIZE_Y * 0.15
		);
		this._fill = this.newFill();
		this._transformId = 0;
	}

	protected newFill(): EShapeFill {
		return new EShapeFillImpl(this, true, EShapeDefaults.FILL_COLOR, 1);
	}

	lock(): this {
		this._lockCount += 1;
		if (this._lockCount === 1) {
			this._isTypeChanged = false;
			this._isSizeChanged = false;
			this._isFillChanged = false;
		}
		return this;
	}

	unlock(): this {
		this._lockCount -= 1;
		if (this._lockCount === 0) {
			if (this._isTypeChanged) {
				this.onTypeChange();
			} else if (this._isSizeChanged) {
				this.onSizeChange();
			} else if (this._isFillChanged) {
				this.onFillChange();
			}
			this._isTypeChanged = false;
			this._isSizeChanged = false;
			this._isFillChanged = false;
		}
		return this;
	}

	get type(): EShapePointsMarkerType {
		return this._type;
	}

	set type(type: EShapePointsMarkerType) {
		if (this._type !== type) {
			this._type = type;
			this.onTypeChange();
		}
	}

	protected onTypeChange(): void {
		if (0 < this._lockCount) {
			this._isTypeChanged = true;
			return;
		}
		this._parent.onTypeChange();
	}

	get size(): IPoint {
		return this._size;
	}

	protected onSizeChange(): void {
		if (0 < this._lockCount) {
			this._isSizeChanged = true;
			return;
		}
		this._parent.onSizeChange();
	}

	get transform(): Matrix {
		return this.updateTransform();
	}

	protected updateTransform(): Matrix {
		let result = this._transform;
		if (result == null) {
			result = new Matrix();
			this._transform = result;
		}
		const parentParent = this._parent.parent;
		const id = parentParent.id;
		if (this._transformId !== id) {
			this._transformId = id;
			const formatted = parentParent.formatted;
			if (2 <= formatted.length) {
				this.toTransform(formatted.values, result);
			} else {
				result.identity();
			}
		}
		return result;
	}

	protected abstract toTransform(values: number[], result: Matrix): Matrix;

	protected toTransformMatrix(
		x0: number,
		y0: number,
		x1: number,
		y1: number,
		result: Matrix
	): Matrix {
		const dx = x0 - x1;
		const dy = y0 - y1;
		const n = dx * dx + dy * dy;
		if (0.00001 < n) {
			const f = 1 / Math.sqrt(n);
			const nx = dx * f;
			const ny = dy * f;
			result.set(ny, -nx, -nx, -ny, x0, y0);
		} else {
			result.identity();
		}
		return result;
	}

	get fill(): EShapeFill {
		return this._fill;
	}

	protected onFillChange(): void {
		if (0 < this._lockCount) {
			this._isFillChanged = true;
			return;
		}
		this._parent.onFillChange();
	}

	updateUploaded(): void {
		this.onFillChange();
	}

	copy(source: EShapePointsMarker): this {
		const size = source.size;
		this.set(source.type, size.x, size.y);
		return this;
	}

	set(type?: EShapePointsMarkerType, sizeX?: number, sizeY?: number): this {
		this.lock();

		if (type != null) {
			this.type = type;
		}

		this.size.set(sizeX, sizeY);

		this.unlock();
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		const size = this._size;
		const fillId = this._fill.serialize(manager);
		return manager.addResource(`[${this._type},${size.x},${size.y},${fillId}]`);
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		const resources = manager.resources;
		if (0 <= resourceId && resourceId < resources.length) {
			let parsed = manager.getExtension<EShapePointsMarkerSerizlized>(resourceId);
			if (parsed == null) {
				parsed = JSON.parse(resources[resourceId]) as EShapePointsMarkerSerizlized;
				manager.setExtension(resourceId, parsed);
			}
			this.lock();
			this.type = parsed[0];
			this._size.set(parsed[1], parsed[2]);
			this._fill.deserialize(parsed[3], manager);
			this.unlock();
		}
	}
}
