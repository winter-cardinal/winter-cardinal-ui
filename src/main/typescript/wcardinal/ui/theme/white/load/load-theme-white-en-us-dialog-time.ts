/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogTime } from "../d-theme-white-dialog-time";
import { loadThemeWhiteEnUsPickerTime } from "./load-theme-white-en-us-picker-time";

export const loadThemeWhiteEnUsDialogTime = (): void => {
	DThemeWhite.set("DDialogTime", DThemeWhiteDialogTime);
	loadThemeWhiteEnUsPickerTime();
};
