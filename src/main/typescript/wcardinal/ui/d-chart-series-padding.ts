/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesScalar } from "./d-chart-series-scalar";

export interface DChartSeriesPaddingOptions {
	outer?: number | number[] | DChartSeriesScalar<number>;
	inner?: number | number[] | DChartSeriesScalar<number>;
}

export interface DChartSeriesPadding {
	outer: DChartSeriesScalar<number>;
	inner: DChartSeriesScalar<number>;
}
