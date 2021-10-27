/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartSeriesLineOfAny } from "./d-chart-series-line-of-any";
import { EShapeLineOfAny } from "./shape/variant/e-shape-line-of-any";
import { EShapeLineOfCircles } from "./shape/variant/e-shape-line-of-circles";

/**
 * A series represents a line of circles.
 * Data points must be sorted in ascending order on the X axis.
 */
export class DChartSeriesLineOfCircles<
	CHART extends DBase = DBase
> extends DChartSeriesLineOfAny<CHART> {
	protected newLineOfAny(): EShapeLineOfAny {
		return new EShapeLineOfCircles();
	}
}
