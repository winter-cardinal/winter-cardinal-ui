/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpPickerDate } from "../d-theme-dark-ja-jp-picker-date";
import { loadThemeDarkJaJpPickerDatetime } from "./load-theme-dark-ja-jp-picker-datetime";

export const loadThemeDarkJaJpPickerDate = (): void => {
	DThemeDark.set("DPickerDate", DThemeDarkJaJpPickerDate);
	loadThemeDarkJaJpPickerDatetime();
};
