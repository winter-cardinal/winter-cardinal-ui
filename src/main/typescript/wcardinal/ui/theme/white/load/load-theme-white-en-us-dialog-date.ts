/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDate } from "../d-theme-white-dialog-date";
import { loadThemeWhiteEnUsPickerDate } from "./load-theme-white-en-us-picker-date";

export const loadThemeWhiteEnUsDialogDate = (): void => {
	DThemeWhite.set("DDialogDate", DThemeWhiteDialogDate);
	loadThemeWhiteEnUsPickerDate();
};
