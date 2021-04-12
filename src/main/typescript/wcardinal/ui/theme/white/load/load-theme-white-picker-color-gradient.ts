/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerColorGradient } from "../d-theme-white-picker-color-gradient";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";

export const loadThemeWhitePickerColorGradient = (): void => {
	DThemeWhite.set("DPickerColorGradient", DThemeWhitePickerColorGradient);
	loadThemeWhitePickerColor();
};
