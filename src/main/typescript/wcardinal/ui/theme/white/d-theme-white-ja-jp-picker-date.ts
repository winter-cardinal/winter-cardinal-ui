/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeWhiteJaJpPickerDatetime } from "./d-theme-white-ja-jp-picker-datetime";

export class DThemeWhiteJaJpPickerDate
	extends DThemeWhiteJaJpPickerDatetime
	implements DThemePickerDate
{
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
