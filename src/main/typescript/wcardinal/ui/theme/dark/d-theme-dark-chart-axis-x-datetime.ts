/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkChartAxisX } from "./d-theme-dark-chart-axis-x";

export class DThemeDarkChartAxisXDatetime extends DThemeDarkChartAxisX {
	getMajorTickTextFormat(): string {
		return "%YMD\n%Hms.%mi";
	}
}
