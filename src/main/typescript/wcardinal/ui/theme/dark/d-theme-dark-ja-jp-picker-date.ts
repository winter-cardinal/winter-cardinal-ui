/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePickerDate } from "../../d-picker-date";
import { DPickerDatetimeMask } from "../../d-picker-datetime-mask";
import { DThemeDarkJaJpPickerDatetime } from "./d-theme-dark-ja-jp-picker-datetime";

export class DThemeDarkJaJpPickerDate
	extends DThemeDarkJaJpPickerDatetime
	implements DThemePickerDate
{
	getMask(): DPickerDatetimeMask {
		return DPickerDatetimeMask.DATE;
	}
}
