/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateTransform } from "../../d-chart-coordinate-transform";

export class DThemeWhiteChartCoordinateTransform implements DThemeChartCoordinateTransform {
	isZero(value: number): boolean {
		return Math.abs(value) < Number.EPSILON;
	}
}
