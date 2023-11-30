/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhiteEnUsPickerDatetime } from "./d-theme-white-en-us-picker-datetime";

export class DThemeWhiteEnUsPickerDate
	extends DThemeWhiteEnUsPickerDatetime
	implements DThemePickerDate
{
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
