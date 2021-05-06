/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";
import { EShapeStrokeSide } from "./shape/e-shape-stroke-side";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";

export interface DChartSeriesStrokeOptions {
	enable?: boolean | boolean[] | DChartSeriesScalar<boolean>;
	color?: number | number[] | DChartSeriesScalar<number>;
	alpha?: number | number[] | DChartSeriesScalar<number>;
	width?: number | number[] | DChartSeriesScalar<number>;
	align?: number | number[] | DChartSeriesScalar<number>;
	side: EShapeStrokeSide | EShapeStrokeSide[] | DChartSeriesScalar<EShapeStrokeSide>;
	style?: EShapeStrokeStyle | EShapeStrokeStyle[] | DChartSeriesScalar<EShapeStrokeStyle>;
}

export interface DChartSeriesStroke {
	enable: DChartSeriesScalar<boolean>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
	width: DChartSeriesScalar<number>;
	align: DChartSeriesScalar<number>;
	side: DChartSeriesScalar<EShapeStrokeSide>;
	style: DChartSeriesScalar<EShapeStrokeStyle>;
}
