/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogColorGradient } from "../theme/dark/d-theme-dark-dialog-color-gradient";
import { loadThemeDarkPickerColorGradient } from "./load-theme-dark-picker-color-gradient";

export const loadThemeDarkDialogColorGradient = () => {
	DThemeDark.set( "DDialogColorGradient", DThemeDarkDialogColorGradient );
	loadThemeDarkPickerColorGradient();
};
