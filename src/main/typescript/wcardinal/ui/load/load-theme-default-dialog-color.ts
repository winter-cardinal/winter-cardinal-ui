/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogColor } from "../theme/default/d-theme-default-dialog-color";
import { loadThemeWhitePickerColor } from "./load-theme-default-picker-color";

export const loadThemeWhiteDialogColor = () => {
	DThemeWhite.set( "DDialogColor", DThemeWhiteDialogColor );
	loadThemeWhitePickerColor();
};
