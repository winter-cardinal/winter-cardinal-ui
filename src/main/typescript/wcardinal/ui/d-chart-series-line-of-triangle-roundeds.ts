/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfTriangleRoundeds } from "./shape/variant/e-shape-line-of-triangle-roundeds";

/**
 * A series represents a line of rounded triangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfTriangleRoundeds extends DChartSeriesLineOfAny {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfTriangleRoundeds();
	}
}
