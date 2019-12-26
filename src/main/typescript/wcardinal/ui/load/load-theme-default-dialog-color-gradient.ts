/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogColorGradient } from "../theme/default/d-theme-default-dialog-color-gradient";
import { loadThemeWhitePickerColorGradient } from "./load-theme-default-picker-color-gradient";

export const loadThemeWhiteDialogColorGradient = () => {
	DThemeWhite.set( "DDialogColorGradient", DThemeWhiteDialogColorGradient );
	loadThemeWhitePickerColorGradient();
};
