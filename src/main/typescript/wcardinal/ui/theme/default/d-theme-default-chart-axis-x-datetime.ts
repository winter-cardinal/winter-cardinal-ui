/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultChartAxisX } from "./d-theme-default-chart-axis-x";

export class DThemeDefaultChartAxisXDatetime extends DThemeDefaultChartAxisX {
	getMajorTickTextFormat(): string {
		return "%YMD\n%Hms.%mi";
	}
}
