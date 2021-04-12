/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateLinear } from "../../d-chart-coordinate-linear";

export class DThemeDarkChartCoordinateLinear implements DThemeChartCoordinateLinear {
	isZero(value: number): boolean {
		return Math.abs(value) < 0.00001;
	}

	toStepScale(scale: number): number {
		if (5.5 <= scale) {
			return 10;
		} else if (2.2 <= scale) {
			return 5;
		} else if (1.1 <= scale) {
			return 2;
		}
		return 1;
	}
}
