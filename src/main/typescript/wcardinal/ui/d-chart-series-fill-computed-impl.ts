/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesContainer } from "./d-chart-series-container";
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
		container: DChartSeriesContainer, index: number,
		fill?: DChartSeriesFillComputedOptions
	): DChartSeriesFillComputed {
		const containerFill = container.fill;
		if( fill ) {
			return new DChartSeriesFillComputedImpl(
				( fill.enable != null ? fill.enable : containerFill.enable( index ) ),
				( fill.color != null ? fill.color : containerFill.color( index ) ),
				( fill.alpha != null ? fill.alpha : containerFill.alpha( index ) )
			);
		} else {
			return new DChartSeriesFillComputedImpl(
				containerFill.enable( index ),
				containerFill.color( index ),
				containerFill.alpha( index )
			);
		}
	}
}
