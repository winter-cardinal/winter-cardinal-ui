/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, Point } from "pixi.js";
import { EShapePointsMarker } from "./e-shape-points-marker";
import { EShapePointsMarkerType } from "./e-shape-points-marker-type";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";

export class EShapePointsMarkerNoop implements EShapePointsMarker {
	protected _size?: IPoint;
	protected _transform?: Matrix;

	lock(): this {
		return this;
	}

	unlock(): this {
		return this;
	}

	get type(): EShapePointsMarkerType {
		return EShapePointsMarkerType.NONE;
	}

	set type(type: EShapePointsMarkerType) {
		// DO NOTHING
	}

	get size(): IPoint {
		let result = this._size;
		if (result == null) {
			result = new Point();
			this._size = result;
		}
		return result;
	}

	get transform(): Matrix {
		let result = this._transform;
		if (result == null) {
			result = new Matrix();
			this._transform = result;
		}
		return result;
	}

	copy(source: EShapePointsMarker): this {
		return this;
	}

	set(type?: EShapePointsMarkerType, sizeX?: number, sizeY?: number): this {
		return this;
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(resourceId: number, manager: EShapeResourceManagerDeserialization): void {
		// DO NOTHING
	}
}
