/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DPickerTimeBoundConstantSecond {
	min: number;
	max: number;
}

export interface DPickerTimeBoundConstantMinute {
	min: number;
	max: number;
}

export interface DPickerTimeBoundConstantHour {
	min: number;
	max: number;
}

export interface DPickerTimeBoundConstant {
	second: DPickerTimeBoundConstantSecond;
	minute: DPickerTimeBoundConstantMinute;
	hour: DPickerTimeBoundConstantHour;
}
