/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultPickerDatetime } from "../theme/default/d-theme-default-picker-datetime";
import { DThemeDefaultPickerDatetimeButtonBack } from "../theme/default/d-theme-default-picker-datetime-button-back";
import { DThemeDefaultPickerDatetimeButtonDate } from "../theme/default/d-theme-default-picker-datetime-button-date";
import { DThemeDefaultPickerDatetimeButtonNext } from "../theme/default/d-theme-default-picker-datetime-button-next";
import { DThemeDefaultPickerDatetimeLabel } from "../theme/default/d-theme-default-picker-datetime-label";
import { DThemeDefaultPickerDatetimeLabelDate } from "../theme/default/d-theme-default-picker-datetime-label-date";
import { DThemeDefaultPickerDatetimeSpace } from "../theme/default/d-theme-default-picker-datetime-space";
import { loadThemeDefaultPickerTime } from "./load-theme-default-picker-time";

export const loadThemeDefaultPickerDatetime = () => {
	DThemeDefault.set( "DPickerDatetimeButtonBack", DThemeDefaultPickerDatetimeButtonBack );
	DThemeDefault.set( "DPickerDatetimeButtonDate", DThemeDefaultPickerDatetimeButtonDate );
	DThemeDefault.set( "DPickerDatetimeButtonNext", DThemeDefaultPickerDatetimeButtonNext );
	DThemeDefault.set( "DPickerDatetimeLabelDate", DThemeDefaultPickerDatetimeLabelDate );
	DThemeDefault.set( "DPickerDatetimeLabel", DThemeDefaultPickerDatetimeLabel );
	DThemeDefault.set( "DPickerDatetimeSpace", DThemeDefaultPickerDatetimeSpace );
	DThemeDefault.set( "DPickerDatetime", DThemeDefaultPickerDatetime );
	loadThemeDefaultPickerTime();
};
