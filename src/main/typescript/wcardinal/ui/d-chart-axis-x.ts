/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisBase } from "./d-chart-axis-base";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";

export interface DChartAxisXOptions<THEME extends DThemeChartAxisBase>
	extends DChartAxisBaseOptions<THEME> {}

/**
 * An X axis.
 */
export class DChartAxisX<
	CHART extends DBase = DBase,
	THEME extends DThemeChartAxisBase = DThemeChartAxisBase,
	OPTIONS extends DChartAxisXOptions<THEME> = DChartAxisXOptions<THEME>
> extends DChartAxisBase<CHART, THEME, OPTIONS> {
	protected getType(): string {
		return "DChartAxisX";
	}
}
