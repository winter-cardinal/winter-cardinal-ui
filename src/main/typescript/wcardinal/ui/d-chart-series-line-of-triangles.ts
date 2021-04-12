/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinate } from "./d-chart-coordinate";
import { DChartSeriesLineOfAny, DChartSeriesLineOfAnyOptions } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfTriangles } from "./shape/variant/e-shape-line-of-triangles";

/**
 * A series represents a line of triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfTriangles extends DChartSeriesLineOfAny {
	protected _sizeId: number;

	constructor(options?: DChartSeriesLineOfAnyOptions) {
		super(options);
		this._sizeId = 0;
	}

	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfTriangles();
	}

	protected applyLine(
		line: EShapeLineOfAny,
		xcoordinate: DChartCoordinate,
		ycoordinate: DChartCoordinate,
		sx: number,
		sy: number,
		cx: number,
		cy: number,
		values: number[]
	): void {
		// Offset
		const size = this._size;
		const offset = this._offset;
		if (size && offset && this._sizeId !== size.y) {
			this._sizeId = size.y;
			line.points.offset.y = offset.y - size.y * 0.2;
		}

		//
		super.applyLine(line, xcoordinate, ycoordinate, sx, sy, cx, cy, values);
	}
}
