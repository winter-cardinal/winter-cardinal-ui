/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogColor } from "../d-theme-white-dialog-color";
import { loadThemeWhiteJaJpPickerColor } from "./load-theme-white-ja-jp-picker-color";

export const loadThemeWhiteJaJpDialogColor = (): void => {
	DThemeWhite.set("DDialogColor", DThemeWhiteDialogColor);
	loadThemeWhiteJaJpPickerColor();
};
