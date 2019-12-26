/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogColorGradient } from "../theme/white/d-theme-white-dialog-color-gradient";
import { loadThemeWhitePickerColorGradient } from "./load-theme-white-picker-color-gradient";

export const loadThemeWhiteDialogColorGradient = () => {
	DThemeWhite.set( "DDialogColorGradient", DThemeWhiteDialogColorGradient );
	loadThemeWhitePickerColorGradient();
};
