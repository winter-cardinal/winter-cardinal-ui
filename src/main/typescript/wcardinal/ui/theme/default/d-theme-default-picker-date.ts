/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhitePickerDatetime } from "./d-theme-default-picker-datetime";

export class DThemeWhitePickerDate extends DThemeWhitePickerDatetime implements DThemePickerDate {
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
