/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerColorGradient } from "../d-theme-white-picker-color-gradient";
import { loadThemeWhiteEnUsPickerColor } from "./load-theme-white-en-us-picker-color";

export const loadThemeWhiteEnUsPickerColorGradient = (): void => {
	DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
	loadThemeWhiteEnUsPickerColor();
};
