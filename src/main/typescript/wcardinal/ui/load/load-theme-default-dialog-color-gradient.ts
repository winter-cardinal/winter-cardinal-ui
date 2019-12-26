/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogColorGradient } from "../theme/default/d-theme-default-dialog-color-gradient";
import { loadThemeDefaultPickerColorGradient } from "./load-theme-default-picker-color-gradient";

export const loadThemeDefaultDialogColorGradient = () => {
	DThemeDefault.set( "DDialogColorGradient", DThemeDefaultDialogColorGradient );
	loadThemeDefaultPickerColorGradient();
};
