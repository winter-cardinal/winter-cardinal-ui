/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DChartAxisBase } from "./d-chart-axis-base";
import { DChartAxisBaseOptions, DThemeChartAxisBase } from "./d-chart-axis-base-options";

export interface DChartAxisYOptions<THEME extends DThemeChartAxisBase>
	extends DChartAxisBaseOptions<THEME> {}

/**
 * An Y axis.
 */
export class DChartAxisY<
	CHART extends DBase = DBase,
	THEME extends DThemeChartAxisBase = DThemeChartAxisBase,
	OPTIONS extends DChartAxisYOptions<THEME> = DChartAxisYOptions<THEME>
> extends DChartAxisBase<CHART, THEME, OPTIONS> {
	protected getType(): string {
		return "DChartAxisY";
	}
}
