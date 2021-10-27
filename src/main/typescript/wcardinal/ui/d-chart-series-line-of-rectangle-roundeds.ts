/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfRectangleRoundeds } from "./shape/variant/e-shape-line-of-rectangle-roundeds";

/**
 * A series represents a line of rounded rectangles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfRectangleRoundeds<
	CHART extends DBase = DBase
> extends DChartSeriesLineOfAny<CHART> {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfRectangleRoundeds();
	}
}
