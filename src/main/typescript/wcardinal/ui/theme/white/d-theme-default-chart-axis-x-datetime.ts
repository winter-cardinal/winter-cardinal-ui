/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteChartAxisX } from "./d-theme-default-chart-axis-x";

export class DThemeWhiteChartAxisXDatetime extends DThemeWhiteChartAxisX {
	getMajorTickTextFormat(): string {
		return "%YMD\n%Hms.%mi";
	}
}
