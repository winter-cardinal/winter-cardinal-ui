/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DPickerDates } from "./d-picker-dates";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimeMaskOptions, DPickerDatetimeMasks } from "./d-picker-datetime-masks";
import { DPickerTimes } from "./d-picker-times";

export class DPickerDatetimes {
	static format(date: Date, mask: DPickerDatetimeMask): string {
		const hms = DPickerTimes.format(date, mask);
		if (0 < hms.length) {
			return `${DPickerDates.format(date)} ${hms}`;
		} else {
			return `${DPickerDates.format(date)}`;
		}
	}

	static toMask(options?: DPickerDatetimeMaskOptions): DPickerDatetimeMask {
		return DPickerDatetimeMasks.from("DPickerDatetime", options);
	}
}
