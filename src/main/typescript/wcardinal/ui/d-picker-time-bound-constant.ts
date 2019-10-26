/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export interface DPickerTimeBoundConstant {
	second: {
		min: number;
		max: number;
	};

	minute: {
		min: number;
		max: number;
	};

	hour: {
		min: number;
		max: number;
	};
}
