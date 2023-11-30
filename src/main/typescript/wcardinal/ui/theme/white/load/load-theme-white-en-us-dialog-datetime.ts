/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogDatetime } from "../d-theme-white-dialog-datetime";
import { loadThemeWhiteEnUsPickerDatetime } from "./load-theme-white-en-us-picker-datetime";

export const loadThemeWhiteEnUsDialogDatetime = (): void => {
	DThemeWhite.set("DDialogDatetime", DThemeWhiteDialogDatetime);
	loadThemeWhiteEnUsPickerDatetime();
};
