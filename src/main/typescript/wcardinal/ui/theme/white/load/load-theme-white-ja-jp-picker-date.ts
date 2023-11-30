/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpPickerDate } from "../d-theme-white-ja-jp-picker-date";
import { loadThemeWhiteJaJpPickerDatetime } from "./load-theme-white-ja-jp-picker-datetime";

export const loadThemeWhiteJaJpPickerDate = (): void => {
	DThemeWhite.set("DPickerDate", DThemeWhiteJaJpPickerDate);
	loadThemeWhiteJaJpPickerDatetime();
};
