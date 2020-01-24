/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";

export interface DChartSeriesPointOptions {
	x?: number | number[] | DChartSeriesScalar<number>;
	y?: number | number[] | DChartSeriesScalar<number>;
}

export interface DChartSeriesPoint {
	x?: DChartSeriesScalar<number>;
	y?: DChartSeriesScalar<number>;
}
