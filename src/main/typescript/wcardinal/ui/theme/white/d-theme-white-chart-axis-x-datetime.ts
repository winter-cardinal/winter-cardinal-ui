/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DChartCoordinateTickMajorStepFunction } from "../../d-chart-coordinate-tick-major-step-function";
import { DThemeWhiteChartAxisX } from "./d-theme-white-chart-axis-x";

const STEP_FUNCTION = (domainMin: number, domainMax: number, majorCount: number): number => {
	const span = Math.abs(domainMax - domainMin) / majorCount;
	if (span <= 10) {
		if (span <= 1.5) {
			return 1;
		} else if (span <= 3.5) {
			return 2;
		} else if (span <= 7.5) {
			return 5;
		}
		return 10;
	} else if (span <= 100) {
		if (span <= 15) {
			return 10;
		} else if (span <= 35) {
			return 20;
		} else if (span <= 75) {
			return 50;
		}
		return 100;
	} else if (span <= 1_000) {
		if (span <= 150) {
			return 100;
		} else if (span <= 350) {
			return 200;
		} else if (span <= 750) {
			return 500;
		}
		return 1_000;
	} else if (span <= 10_000) {
		if (span <= 1_500) {
			return 1_000;
		} else if (span <= 3_500) {
			return 2_000;
		} else if (span <= 7_500) {
			return 5000;
		}
		return 10_000;
	} else if (span <= 120_000) {
		if (span <= 15_000) {
			return 10_000;
		} else if (span <= 25_000) {
			return 20_000;
		} else if (span <= 45_000) {
			return 30_000;
		} else if (span <= 75_000) {
			return 60_000;
		} else if (span <= 105_000) {
			return 90_000;
		}
		return 120_000;
	} else if (span <= 10_800_000) {
		if (span <= 210_000) {
			return 120_000;
		} else if (span <= 450_000) {
			return 300_000;
		} else if (span <= 900_000) {
			return 600_000;
		} else if (span <= 1_500_000) {
			return 1_200_000;
		} else if (span <= 2_700_000) {
			return 1_800_000;
		} else if (span <= 4_500_000) {
			return 3_600_000;
		} else if (span <= 6_300_000) {
			return 5_400_000;
		} else if (span <= 8_100_000) {
			return 7_200_000;
		} else if (span <= 9_900_000) {
			return 9_000_000;
		}
		return 10_800_000;
	} else {
		const minutes = 3_600_000;
		const hours = span / minutes;
		if (hours <= 24) {
			if (hours <= 1.5) {
				return minutes;
			} else if (hours <= 2.5) {
				return 2 * minutes;
			} else if (hours <= 3.5) {
				return 3 * minutes;
			} else if (hours <= 5) {
				return 4 * minutes;
			} else if (hours <= 7) {
				return 6 * minutes;
			} else if (hours <= 10) {
				return 8 * minutes;
			} else if (hours <= 15) {
				return 12 * minutes;
			} else if (hours <= 21) {
				return 18 * minutes;
			}
			return 24 * minutes;
		} else {
			const days = hours / 24;
			const base = Math.pow(10, Math.floor(Math.log(days) / Math.LN10));
			const scale = span / base;
			if (scale <= 1.5) {
				return base;
			} else if (scale <= 3.5) {
				return 2 * base;
			} else if (scale <= 7.5) {
				return 5 * base;
			}
			return 10 * base;
		}
	}
};

export class DThemeWhiteChartAxisXDatetime extends DThemeWhiteChartAxisX {
	getMajorTickTextFormat(): string {
		return "%YMD\n%Hms";
	}

	getMajorTickStep(): number | DChartCoordinateTickMajorStepFunction | undefined {
		return STEP_FUNCTION;
	}
}
