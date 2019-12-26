/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhitePickerColorGradient } from "../theme/white/d-theme-white-picker-color-gradient";
import { loadThemeWhitePickerColor } from "./load-theme-white-picker-color";

export const loadThemeWhitePickerColorGradient = () => {
	DThemeWhite.set( "DPickerColorGradient", DThemeWhitePickerColorGradient );
	loadThemeWhitePickerColor();
};
