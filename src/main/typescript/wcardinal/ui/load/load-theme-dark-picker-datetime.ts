/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkPickerDatetime } from "../theme/dark/d-theme-dark-picker-datetime";
import { DThemeDarkPickerDatetimeButtonBack } from "../theme/dark/d-theme-dark-picker-datetime-button-back";
import { DThemeDarkPickerDatetimeButtonDate } from "../theme/dark/d-theme-dark-picker-datetime-button-date";
import { DThemeDarkPickerDatetimeButtonNext } from "../theme/dark/d-theme-dark-picker-datetime-button-next";
import { DThemeDarkPickerDatetimeLabel } from "../theme/dark/d-theme-dark-picker-datetime-label";
import { DThemeDarkPickerDatetimeLabelDate } from "../theme/dark/d-theme-dark-picker-datetime-label-date";
import { DThemeDarkPickerDatetimeSpace } from "../theme/dark/d-theme-dark-picker-datetime-space";
import { loadThemeDarkPickerTime } from "./load-theme-dark-picker-time";

export const loadThemeDarkPickerDatetime = () => {
	DThemeDark.set( "DPickerDatetimeButtonBack", DThemeDarkPickerDatetimeButtonBack );
	DThemeDark.set( "DPickerDatetimeButtonDate", DThemeDarkPickerDatetimeButtonDate );
	DThemeDark.set( "DPickerDatetimeButtonNext", DThemeDarkPickerDatetimeButtonNext );
	DThemeDark.set( "DPickerDatetimeLabelDate", DThemeDarkPickerDatetimeLabelDate );
	DThemeDark.set( "DPickerDatetimeLabel", DThemeDarkPickerDatetimeLabel );
	DThemeDark.set( "DPickerDatetimeSpace", DThemeDarkPickerDatetimeSpace );
	DThemeDark.set( "DPickerDatetime", DThemeDarkPickerDatetime );
	loadThemeDarkPickerTime();
};
