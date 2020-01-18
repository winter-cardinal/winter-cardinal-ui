/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfTriangles } from "./shape/variant/e-shape-line-of-triangles";

/**
 * A series represents a line of triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfTriangles extends DChartSeriesLineOfAny {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfTriangles();
	}
}
