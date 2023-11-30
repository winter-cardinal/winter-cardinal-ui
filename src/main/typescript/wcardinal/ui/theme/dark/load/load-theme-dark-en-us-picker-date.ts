/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsPickerDate } from "../d-theme-dark-en-us-picker-date";
import { loadThemeDarkEnUsPickerDatetime } from "./load-theme-dark-en-us-picker-datetime";

export const loadThemeDarkEnUsPickerDate = (): void => {
	DThemeDark.set("DPickerDate", DThemeDarkEnUsPickerDate);
	loadThemeDarkEnUsPickerDatetime();
};
