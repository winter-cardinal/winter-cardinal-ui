/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogColorGradient } from "../d-theme-white-dialog-color-gradient";
import { loadThemeWhiteEnUsPickerColorGradient } from "./load-theme-white-en-us-picker-color-gradient";

export const loadThemeWhiteEnUsDialogColorGradient = (): void => {
	DThemeWhite.set("DDialogColorGradient", DThemeWhiteDialogColorGradient);
	loadThemeWhiteEnUsPickerColorGradient();
};
