/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDatetime } from "../d-theme-white-dialog-datetime";
import { loadThemeWhiteJaJpPickerDatetime } from "./load-theme-white-ja-jp-picker-datetime";

export const loadThemeWhiteJaJpDialogDatetime = (): void => {
	DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
	loadThemeWhiteJaJpPickerDatetime();
};
