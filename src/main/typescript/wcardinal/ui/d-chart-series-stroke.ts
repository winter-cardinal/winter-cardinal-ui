/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { EShapeStrokeSide } from "./shape";
import { EShapePointsStyleOption } from "./shape/e-shape-points-styles";

export interface DChartSeriesStrokeOptions {
	enable?: boolean | boolean[] | DChartSeriesScalar<boolean>;
	color?: number | number[] | DChartSeriesScalar<number>;
	alpha?: number | number[] | DChartSeriesScalar<number>;
	width?: number | number[] | DChartSeriesScalar<number>;
	align?: number | number[] | DChartSeriesScalar<number>;
	side: EShapeStrokeSide | EShapeStrokeSide[] | DChartSeriesScalar<EShapeStrokeSide>;
	style?: EShapePointsStyleOption | EShapePointsStyleOption[] |
		DChartSeriesScalar<EShapePointsStyleOption>;
}

export interface DChartSeriesStroke {
	enable: DChartSeriesScalar<boolean>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	width: DChartSeriesScalar<number>;
	align: DChartSeriesScalar<number>;
	side: DChartSeriesScalar<EShapeStrokeSide>;
	style: DChartSeriesScalar<EShapePointsStyleOption>;
}
