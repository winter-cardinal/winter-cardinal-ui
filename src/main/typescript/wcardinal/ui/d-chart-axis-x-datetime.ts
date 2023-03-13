/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DThemeChartAxisBase } from "./d-chart-axis-base-options";
import { DChartAxisX, DChartAxisXOptions } from "./d-chart-axis-x";

export interface DChartAxisXDatetimeOptions<THEME extends DThemeChartAxisBase>
	extends DChartAxisXOptions<THEME> {}

/**
 * An X axis for datetimes.
 */
export class DChartAxisXDatetime<
	CHART extends DBase = DBase,
	THEME extends DThemeChartAxisBase = DThemeChartAxisBase,
	OPTIONS extends DChartAxisXDatetimeOptions<THEME> = DChartAxisXDatetimeOptions<THEME>
> extends DChartAxisX<CHART, THEME, OPTIONS> {
	protected getType(): string {
		return "DChartAxisXDatetime";
	}
}
