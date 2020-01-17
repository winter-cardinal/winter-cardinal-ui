/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfRectangleRoundeds } from "./shape/variant/e-shape-line-of-rectangle-roundeds";

/**
 * A series represents a line of rounded rectangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfRectangleRoundeds extends DChartSeriesLineOfAny {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfRectangleRoundeds();
	}
}
