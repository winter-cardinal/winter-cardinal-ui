/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesPoint, DChartSeriesPointOptions } from "./d-chart-series-point";
import { DChartSeriesScalar, DChartSeriesScalars } from "./d-chart-series-scalar";

export class DChartSeriesPointImpl implements DChartSeriesPoint {
	x?: DChartSeriesScalar<number>;
	y?: DChartSeriesScalar<number>;

	constructor(options: DChartSeriesPointOptions | undefined) {
		if (options) {
			if (options.x != null) {
				this.x = DChartSeriesScalars.from(options.x, 0);
			}

			if (options.y != null) {
				this.y = DChartSeriesScalars.from(options.y, 0);
			}
		}
	}
}
