/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhitePickerColorGradient } from "../theme/default/d-theme-default-picker-color-gradient";
import { loadThemeWhitePickerColor } from "./load-theme-default-picker-color";

export const loadThemeWhitePickerColorGradient = () => {
	DThemeWhite.set( "DPickerColorGradient", DThemeWhitePickerColorGradient );
	loadThemeWhitePickerColor();
};
