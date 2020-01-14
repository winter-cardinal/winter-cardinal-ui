/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfRectangles } from "./shape/variant/e-shape-line-of-rectangles";

/**
 * A series represents a line of rectangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfRectangles extends DChartSeriesLineOfAny {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfRectangles();
	}
}
