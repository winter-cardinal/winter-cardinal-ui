/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateTick } from "../../d-chart-coordinate-tick";

export class DThemeDarkChartCoordinateTick implements DThemeChartCoordinateTick {
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
