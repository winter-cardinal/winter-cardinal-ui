/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DChartRegion {
	from: number;
	to: number;
	set( from?: number, to?: number ): this;
	add( from: number, to: number ): this;
	clear(): this;
}

export interface DChartRegionImmutable {
	readonly from: number;
	readonly to: number;
}
