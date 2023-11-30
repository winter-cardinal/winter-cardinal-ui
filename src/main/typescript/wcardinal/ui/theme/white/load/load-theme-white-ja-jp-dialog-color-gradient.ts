/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogColorGradient } from "../d-theme-white-dialog-color-gradient";
import { loadThemeWhiteJaJpPickerColorGradient } from "./load-theme-white-ja-jp-picker-color-gradient";

export const loadThemeWhiteJaJpDialogColorGradient = (): void => {
	DThemeWhite.set("DDialogColorGradient", DThemeWhiteDialogColorGradient);
	loadThemeWhiteJaJpPickerColorGradient();
};
