/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { EShapePointsStyle } from "./shape/e-shape-points";

export type DChartSeriesStrokeStyleOption = EShapePointsStyle |
	keyof typeof EShapePointsStyle | Array<keyof typeof EShapePointsStyle>;

export interface DChartSeriesStrokeOptions {
	color?: number | number[] | DChartSeriesScalar<number>;
	alpha?: number | number[] | DChartSeriesScalar<number>;
	width?: number | number[] | DChartSeriesScalar<number>;
	style?: DChartSeriesStrokeStyleOption | DChartSeriesStrokeStyleOption[] |
		DChartSeriesScalar<DChartSeriesStrokeStyleOption>;
}

export interface DChartSeriesStroke {
	width: DChartSeriesScalar<number>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	style: DChartSeriesScalar<DChartSeriesStrokeStyleOption>;
}
