/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhitePickerDatetime } from "../theme/white/d-theme-white-picker-datetime";
import { DThemeWhitePickerDatetimeButtonBack } from "../theme/white/d-theme-white-picker-datetime-button-back";
import { DThemeWhitePickerDatetimeButtonDate } from "../theme/white/d-theme-white-picker-datetime-button-date";
import { DThemeWhitePickerDatetimeButtonNext } from "../theme/white/d-theme-white-picker-datetime-button-next";
import { DThemeWhitePickerDatetimeLabel } from "../theme/white/d-theme-white-picker-datetime-label";
import { DThemeWhitePickerDatetimeLabelDate } from "../theme/white/d-theme-white-picker-datetime-label-date";
import { DThemeWhitePickerDatetimeSpace } from "../theme/white/d-theme-white-picker-datetime-space";
import { loadThemeWhitePickerTime } from "./load-theme-white-picker-time";

export const loadThemeWhitePickerDatetime = () => {
	DThemeWhite.set( "DPickerDatetimeButtonBack", DThemeWhitePickerDatetimeButtonBack );
	DThemeWhite.set( "DPickerDatetimeButtonDate", DThemeWhitePickerDatetimeButtonDate );
	DThemeWhite.set( "DPickerDatetimeButtonNext", DThemeWhitePickerDatetimeButtonNext );
	DThemeWhite.set( "DPickerDatetimeLabelDate", DThemeWhitePickerDatetimeLabelDate );
	DThemeWhite.set( "DPickerDatetimeLabel", DThemeWhitePickerDatetimeLabel );
	DThemeWhite.set( "DPickerDatetimeSpace", DThemeWhitePickerDatetimeSpace );
	DThemeWhite.set( "DPickerDatetime", DThemeWhitePickerDatetime );
	loadThemeWhitePickerTime();
};
