/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeChartCoordinateLog } from "../../d-chart-coordinate-log";

export class DThemeDarkChartCoordinateLog implements DThemeChartCoordinateLog {
	isZero( value: number ): boolean {
		return Math.abs( value ) < 0.00001;
	}

	toStepScale( scale: number ): number {
		if( 5.5 <= scale ) {
			return 10;
		} else if( 2.2 <= scale ) {
			return 5;
		} else if( 1.1 <= scale ) {
			return 2;
		}
		return 1;
	}
}
