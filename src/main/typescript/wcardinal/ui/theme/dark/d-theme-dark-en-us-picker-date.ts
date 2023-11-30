/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkEnUsPickerDatetime } from "./d-theme-dark-en-us-picker-datetime";

export class DThemeDarkEnUsPickerDate
	extends DThemeDarkEnUsPickerDatetime
	implements DThemePickerDate
{
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
