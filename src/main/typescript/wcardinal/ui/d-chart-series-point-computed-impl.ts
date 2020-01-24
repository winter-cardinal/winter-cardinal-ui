/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesPoint } from "./d-chart-series-point";
import { DChartSeriesPointComputed, DChartSeriesPointComputedOptions } from "./d-chart-series-point-computed";

export class DChartSeriesPointComputedImpl implements DChartSeriesPointComputed {
	x: number;
	y: number;

	constructor( x: number, y: number ) {
		this.x = x;
		this.y = y;
	}

	static from(
		base: DChartSeriesPoint, index: number,
		point: DChartSeriesPointComputedOptions | undefined,
		x: number, y: number
	): DChartSeriesPointComputed {
		if( point ) {
			return new DChartSeriesPointComputedImpl(
				( point.x != null ? point.x : ( base.x != null ? base.x( index ) : x ) ),
				( point.y != null ? point.y : ( base.y != null ? base.y( index ) : y ) )
			);
		} else {
			return new DChartSeriesPointComputedImpl(
				base.x != null ? base.x( index ) : x,
				base.y != null ? base.y( index ) : y
			);
		}
	}
}
