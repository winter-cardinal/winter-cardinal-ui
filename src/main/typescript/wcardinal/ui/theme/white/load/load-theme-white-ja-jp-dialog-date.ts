/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDate } from "../d-theme-white-dialog-date";
import { loadThemeWhiteJaJpPickerDate } from "./load-theme-white-ja-jp-picker-date";

export const loadThemeWhiteJaJpDialogDate = (): void => {
	DThemeWhite.set("DDialogDate", DThemeWhiteDialogDate);
	loadThemeWhiteJaJpPickerDate();
};
