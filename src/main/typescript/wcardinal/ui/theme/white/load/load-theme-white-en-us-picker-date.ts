/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsPickerDate } from "../d-theme-white-en-us-picker-date";
import { loadThemeWhiteEnUsPickerDatetime } from "./load-theme-white-en-us-picker-datetime";

export const loadThemeWhiteEnUsPickerDate = (): void => {
	DThemeWhite.set("DPickerDate", DThemeWhiteEnUsPickerDate);
	loadThemeWhiteEnUsPickerDatetime();
};
