/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartColorSet2 } from "./d-chart-color-set";
import { DChartSeriesFill, DChartSeriesFillOptions } from "./d-chart-series-fill";
import { DChartSeriesScalar, DChartSeriesScalars } from "./d-chart-series-scalar";
import { EShapeDefaults } from "./shape/e-shape-defaults";

export class DChartSeriesFillImpl implements DChartSeriesFill {
	enable: DChartSeriesScalar<boolean>;
	color: DChartSeriesScalar<number>;
	alpha: DChartSeriesScalar<number>;

	constructor( options?: DChartSeriesFillOptions ) {
		this.enable = DChartSeriesScalars.from( options && options.enable, true );
		this.color = DChartSeriesScalars.from( options && options.color, DChartColorSet2 );
		this.alpha = DChartSeriesScalars.from( options && options.alpha, EShapeDefaults.FILL_ALPHA );
	}
}
