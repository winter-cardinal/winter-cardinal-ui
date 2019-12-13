/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase, DBaseOptions, DThemeBase } from "./d-base";

export interface DChartLegendOptions<THEME extends DThemeChartLegend> extends DBaseOptions<THEME> {

}

export interface DThemeChartLegend extends DThemeBase {
}

export class DChartLegend<
	THEME extends DThemeChartLegend = DThemeChartLegend,
	OPTIONS extends DChartLegendOptions<THEME> = DChartLegendOptions<THEME>
> extends DBase<THEME, OPTIONS> {
	protected init( options?: OPTIONS ): void {
		super.init( options );
	}

	protected getType(): string {
		return "DChartLegend";
	}
}
