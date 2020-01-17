/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogColor } from "../theme/dark/d-theme-dark-dialog-color";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";

export const loadThemeDarkDialogColor = () => {
	DThemeDark.set( "DDialogColor", DThemeDarkDialogColor );
	loadThemeDarkPickerColor();
};
