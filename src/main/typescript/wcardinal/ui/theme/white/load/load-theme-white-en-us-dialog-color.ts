/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogColor } from "../d-theme-white-dialog-color";
import { loadThemeWhiteEnUsPickerColor } from "./load-theme-white-en-us-picker-color";

export const loadThemeWhiteEnUsDialogColor = (): void => {
	DThemeWhite.set("DDialogColor", DThemeWhiteDialogColor);
	loadThemeWhiteEnUsPickerColor();
};
