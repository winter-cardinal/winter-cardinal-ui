/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinateTickMajorStepFunction } from "../../d-chart-coordinate-tick-major-step-function";
import { DThemeDarkChartAxisX } from "./d-theme-dark-chart-axis-x";

const STEP_FUNCTION = (domainMin: number, domainMax: number, majorCount: number): number => {
	const span = Math.abs(domainMax - domainMin) / majorCount;
	if (span <= 10) {
		// The threshold x is calculated as follows:
		// (1 - x/a)^2 = (1 - x/b)^2
		// 1 - x/a = x/b - 1
		// x = 2ab/(a + b)
		if (span <= 1.33) {
			return 1;
		} else if (span <= 2.86) {
			return 2;
		} else if (span <= 6.67) {
			return 5;
		}
		return 10;
	} else if (span <= 100) {
		if (span <= 13.33) {
			return 10;
		} else if (span <= 28.57) {
			return 20;
		} else if (span <= 66.67) {
			return 50;
		}
		return 100;
	} else if (span <= 1_000) {
		if (span <= 133.33) {
			return 100;
		} else if (span <= 285.71) {
			return 200;
		} else if (span <= 666.67) {
			return 500;
		}
		return 1_000;
	} else if (span <= 10_000) {
		if (span <= 1_333.33) {
			return 1_000;
		} else if (span <= 2_857.14) {
			return 2_000;
		} else if (span <= 6_666.66) {
			return 5000;
		}
		return 10_000;
	} else if (span <= 120_000) {
		if (span <= 13_333.33) {
			return 10_000;
		} else if (span <= 24_000) {
			return 20_000;
		} else if (span <= 40_000) {
			return 30_000;
		} else if (span <= 72_000) {
			return 60_000;
		} else if (span <= 102_857.14) {
			return 90_000;
		}
		return 120_000;
	} else if (span <= 10_800_000) {
		if (span <= 171_428.57) {
			return 120_000;
		} else if (span <= 400_000) {
			return 300_000;
		} else if (span <= 800_000) {
			return 600_000;
		} else if (span <= 1_440_000) {
			return 1_200_000;
		} else if (span <= 2_400_000) {
			return 1_800_000;
		} else if (span <= 4_320_000) {
			return 3_600_000;
		} else if (span <= 6_171_428.57) {
			return 5_400_000;
		} else if (span <= 8_000_000) {
			return 7_200_000;
		} else if (span <= 9_818_181.82) {
			return 9_000_000;
		}
		return 10_800_000;
	} else {
		const minutes = 3_600_000;
		const hours = span / minutes;
		if (hours <= 24) {
			if (hours <= 1.33) {
				return minutes;
			} else if (hours <= 2.4) {
				return 2 * minutes;
			} else if (hours <= 3.43) {
				return 3 * minutes;
			} else if (hours <= 4.8) {
				return 4 * minutes;
			} else if (hours <= 6.86) {
				return 6 * minutes;
			} else if (hours <= 9.6) {
				return 8 * minutes;
			} else if (hours <= 14.4) {
				return 12 * minutes;
			} else if (hours <= 20.57) {
				return 18 * minutes;
			}
			return 24 * minutes;
		} else {
			const days = hours / 24;
			const base = Math.pow(10, Math.floor(Math.log(days) / Math.LN10));
			const scale = days / base;
			if (scale <= 1.33) {
				return base * 86_400_000;
			} else if (scale <= 2.86) {
				return base * 172_800_000;
			} else if (scale <= 6.67) {
				return base * 432_000_000;
			}
			return base * 864_000_000;
		}
	}
};

export class DThemeDarkChartAxisXDatetime extends DThemeDarkChartAxisX {
	getMajorTickTextFormat(): string {
		return "%YMD\n%Hms";
	}

	getMajorTickStep(): number | DChartCoordinateTickMajorStepFunction | undefined {
		return STEP_FUNCTION;
	}
}
