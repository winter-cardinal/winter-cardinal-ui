/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";

export interface DChartSeriesFillOptions {
	enable?: boolean | boolean[] | DChartSeriesScalar<boolean>;
	color?: number | number[] | DChartSeriesScalar<number>;
	alpha?: number | number[] | DChartSeriesScalar<number>;
}

export interface DChartSeriesFill {
	enable: DChartSeriesScalar<boolean>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;
}
