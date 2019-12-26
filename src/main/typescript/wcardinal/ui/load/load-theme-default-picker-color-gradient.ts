/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultPickerColorGradient } from "../theme/default/d-theme-default-picker-color-gradient";
import { loadThemeDefaultPickerColor } from "./load-theme-default-picker-color";

export const loadThemeDefaultPickerColorGradient = () => {
	DThemeDefault.set( "DPickerColorGradient", DThemeDefaultPickerColorGradient );
	loadThemeDefaultPickerColor();
};
