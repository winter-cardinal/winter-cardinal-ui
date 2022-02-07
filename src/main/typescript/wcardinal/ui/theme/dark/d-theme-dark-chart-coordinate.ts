/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinate } from "../../d-chart-coordinate";

export class DThemeDarkChartCoordinate implements DThemeChartCoordinate {
	isZero(value: number): boolean {
		return Math.abs(value) < 0.00001;
	}
}
