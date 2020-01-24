/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesFill } from "./d-chart-series-fill";
import { DChartSeriesFillComputed, DChartSeriesFillComputedOptions } from "./d-chart-series-fill-computed";

export class DChartSeriesFillComputedImpl implements DChartSeriesFillComputed {
	enable: boolean;
	color: number;
	alpha: number;

	constructor( enable: boolean, color: number, alpha: number ) {
		this.enable = enable;
		this.color = color;
		this.alpha = alpha;
	}

	static from(
		base: DChartSeriesFill, index: number,
		fill?: DChartSeriesFillComputedOptions
	): DChartSeriesFillComputed {
		if( fill ) {
			return new DChartSeriesFillComputedImpl(
				( fill.enable != null ? fill.enable : base.enable( index ) ),
				( fill.color != null ? fill.color : base.color( index ) ),
				( fill.alpha != null ? fill.alpha : base.alpha( index ) )
			);
		} else {
			return new DChartSeriesFillComputedImpl(
				base.enable( index ),
				base.color( index ),
				base.alpha( index )
			);
		}
	}
}
