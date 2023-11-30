/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogTime } from "../d-theme-white-dialog-time";
import { loadThemeWhiteJaJpPickerTime } from "./load-theme-white-ja-jp-picker-time";

export const loadThemeWhiteJaJpDialogTime = (): void => {
	DThemeWhite.set("DDialogTime", DThemeWhiteDialogTime);
	loadThemeWhiteJaJpPickerTime();
};
