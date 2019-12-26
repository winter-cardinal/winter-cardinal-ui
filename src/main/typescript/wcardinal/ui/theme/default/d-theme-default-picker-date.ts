/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDefaultPickerDatetime } from "./d-theme-default-picker-datetime";

export class DThemeDefaultPickerDate extends DThemeDefaultPickerDatetime implements DThemePickerDate {
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
