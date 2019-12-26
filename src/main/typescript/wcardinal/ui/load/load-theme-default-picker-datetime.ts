/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhitePickerDatetime } from "../theme/default/d-theme-default-picker-datetime";
import { DThemeWhitePickerDatetimeButtonBack } from "../theme/default/d-theme-default-picker-datetime-button-back";
import { DThemeWhitePickerDatetimeButtonDate } from "../theme/default/d-theme-default-picker-datetime-button-date";
import { DThemeWhitePickerDatetimeButtonNext } from "../theme/default/d-theme-default-picker-datetime-button-next";
import { DThemeWhitePickerDatetimeLabel } from "../theme/default/d-theme-default-picker-datetime-label";
import { DThemeWhitePickerDatetimeLabelDate } from "../theme/default/d-theme-default-picker-datetime-label-date";
import { DThemeWhitePickerDatetimeSpace } from "../theme/default/d-theme-default-picker-datetime-space";
import { loadThemeWhitePickerTime } from "./load-theme-default-picker-time";

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
