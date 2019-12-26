/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogColor } from "../theme/default/d-theme-default-dialog-color";
import { loadThemeDefaultPickerColor } from "./load-theme-default-picker-color";

export const loadThemeDefaultDialogColor = () => {
	DThemeDefault.set( "DDialogColor", DThemeDefaultDialogColor );
	loadThemeDefaultPickerColor();
};
