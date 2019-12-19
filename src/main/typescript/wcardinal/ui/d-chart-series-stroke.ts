/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";

export interface DChartSeriesStrokeOptions {
	color?: number | number[] | DChartSeriesScalar<number>;
	alpha?: number | number[] | DChartSeriesScalar<number>;
	width?: number | number[] | DChartSeriesScalar<number>;
	style?: EShapePointsStyleOption | EShapePointsStyleOption[] |
		DChartSeriesScalar<EShapePointsStyleOption>;
}

export interface DChartSeriesStroke {
	width: DChartSeriesScalar<number>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	style: DChartSeriesScalar<EShapePointsStyleOption>;
}
