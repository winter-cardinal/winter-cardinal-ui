/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkPickerDatetime } from "./d-theme-dark-picker-datetime";

export class DThemeDarkPickerDate extends DThemeDarkPickerDatetime implements DThemePickerDate {
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
