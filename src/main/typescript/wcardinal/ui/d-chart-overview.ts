/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DChartOverviewOptions<THEME extends DThemeChartOverview>
	extends DBaseOptions<THEME> {}

export interface DThemeChartOverview extends DThemeBase {}

export class DChartOverview<
	THEME extends DThemeChartOverview = DThemeChartOverview,
	OPTIONS extends DChartOverviewOptions<THEME> = DChartOverviewOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected getType(): string {
		return "DChartOverview";
	}
}
