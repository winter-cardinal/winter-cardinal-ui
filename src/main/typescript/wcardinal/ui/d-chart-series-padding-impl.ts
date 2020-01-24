/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesPadding, DChartSeriesPaddingOptions } from "./d-chart-series-padding";
import { DChartSeriesScalar, DChartSeriesScalars } from "./d-chart-series-scalar";

export class DChartSeriesPaddingImpl implements DChartSeriesPadding {
	outer: DChartSeriesScalar<number>;
	inner: DChartSeriesScalar<number>;

	constructor( options: DChartSeriesPaddingOptions | undefined ) {
		this.outer = DChartSeriesScalars.from( options && options.outer, 0.2 );
		this.inner = DChartSeriesScalars.from( options && options.inner, 0.1 );
	}
}
