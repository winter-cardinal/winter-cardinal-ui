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
		if (7.5 <= scale) {
			return 10 * base;
		} else if (3.5 <= scale) {
			return 5 * base;
		} else if (1.5 <= scale) {
			return 2 * base;
		}
		return base;
	}
}
