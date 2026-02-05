/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, Matrix, Point } from "pixi.js";
import { EShapeDefaults } from "./e-shape-defaults";
import { EShapeFill } from "./e-shape-fill";
import { EShapePointsMarker } from "./e-shape-points-marker";
import { EShapePointsMarkerType } from "./e-shape-points-marker-type";
import { EShapeResourceManagerDeserialization } from "./e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "./e-shape-resource-manager-serialization";
import { EShapeFillImpl } from "./variant/e-shape-fill-impl";
import { EShapeFillDirection } from "./e-shape-fill-direction";

export class EShapePointsMarkerNoop implements EShapePointsMarker {
	protected _size?: IPoint;
	protected _transform?: Matrix;
	protected _fill?: EShapeFill;

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

	get fill(): EShapeFill {
		let result = this._fill;
		if (result == null) {
			result = new EShapeFillImpl(
				this,
				true,
				EShapeDefaults.FILL_COLOR,
				1,
				EShapeFillDirection.BOTTOM,
				1.0
			);
			this._fill = result;
		}
		return result;
	}

	updateUploaded(): void {
		// DO NOTHING
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
