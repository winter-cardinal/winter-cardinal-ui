/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartSeriesPadding } from "./d-chart-series-padding";
import {
	DChartSeriesPaddingComputed, DChartSeriesPaddingComputedOptions
} from "./d-chart-series-padding-computed";

export class DChartSeriesPaddingComputedImpl implements DChartSeriesPaddingComputed {
	outer: number;
	inner: number;

	constructor( outer: number, inner: number ) {
		this.outer = outer;
		this.inner = inner;
	}

	static from(
		base: DChartSeriesPadding, index: number,
		point: DChartSeriesPaddingComputedOptions | undefined
	): DChartSeriesPaddingComputed {
		if( point ) {
			return new DChartSeriesPaddingComputedImpl(
				( point.outer != null ? point.outer : base.outer( index ) ),
				( point.inner != null ? point.inner : base.inner( index ) )
			);
		} else {
			return new DChartSeriesPaddingComputedImpl(
				base.outer( index ),
				base.inner( index )
			);
		}
	}
}
