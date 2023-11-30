/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerColorGradient } from "../d-theme-white-picker-color-gradient";
import { loadThemeWhiteJaJpPickerColor } from "./load-theme-white-ja-jp-picker-color";

export const loadThemeWhiteJaJpPickerColorGradient = (): void => {
	DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
	loadThemeWhiteJaJpPickerColor();
};
