/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateTick } from "../../d-chart-coordinate-tick";

export class DThemeDarkChartCoordinateTick implements DThemeChartCoordinateTick {
	toStep(domainMin: number, domainMax: number, majorCount: number): number {
		const span = Math.abs(domainMax - domainMin) / majorCount;
		const power = Math.floor(Math.log(span) / Math.LN10);
		const base = Math.pow(10, power);
		const scale = span / base;
		// The threshold x is calculated as follows:
		// (1 - x/a)^2 = (1 - x/b)^2
		// 1 - x/a = x/b - 1
		// x = 2ab/(a + b)
		if (scale <= 1.33) {
			return base;
		} else if (scale <= 2.86) {
			return 2 * base;
		} else if (scale <= 6.67) {
			return 5 * base;
		}
		return 10 * base;
	}
}
