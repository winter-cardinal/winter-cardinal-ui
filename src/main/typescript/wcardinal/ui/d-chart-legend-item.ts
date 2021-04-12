/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DChartLegendItemOptions<THEME extends DThemeChartLegendItem>
	extends DBaseOptions<THEME> {}

export interface DThemeChartLegendItem extends DThemeBase {}

export class DChartLegendItem<
	THEME extends DThemeChartLegendItem = DThemeChartLegendItem,
	OPTIONS extends DChartLegendItemOptions<THEME> = DChartLegendItemOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected getType(): string {
		return "DChartLegendItem";
	}
}
