/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerDatetime } from "../d-theme-dark-picker-datetime";
import { DThemeDarkPickerDatetimeButtonBack } from "../d-theme-dark-picker-datetime-button-back";
import { DThemeDarkPickerDatetimeButtonDate } from "../d-theme-dark-picker-datetime-button-date";
import { DThemeDarkPickerDatetimeButtonNext } from "../d-theme-dark-picker-datetime-button-next";
import { DThemeDarkPickerDatetimeLabel } from "../d-theme-dark-picker-datetime-label";
import { DThemeDarkPickerDatetimeLabelDate } from "../d-theme-dark-picker-datetime-label-date";
import { DThemeDarkPickerDatetimeSpace } from "../d-theme-dark-picker-datetime-space";
import { loadThemeDarkPickerTime } from "./load-theme-dark-picker-time";

export const loadThemeDarkPickerDatetime = (): void => {
	DThemeDark.set("DPickerDatetimeButtonBack", DThemeDarkPickerDatetimeButtonBack);
	DThemeDark.set("DPickerDatetimeButtonDate", DThemeDarkPickerDatetimeButtonDate);
	DThemeDark.set("DPickerDatetimeButtonNext", DThemeDarkPickerDatetimeButtonNext);
	DThemeDark.set("DPickerDatetimeLabelDate", DThemeDarkPickerDatetimeLabelDate);
	DThemeDark.set("DPickerDatetimeLabel", DThemeDarkPickerDatetimeLabel);
	DThemeDark.set("DPickerDatetimeSpace", DThemeDarkPickerDatetimeSpace);
	DThemeDark.set("DPickerDatetime", DThemeDarkPickerDatetime);
	loadThemeDarkPickerTime();
};
