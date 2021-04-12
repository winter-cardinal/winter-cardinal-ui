/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColor } from "../d-theme-dark-dialog-color";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";

export const loadThemeDarkDialogColor = (): void => {
	DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
	loadThemeDarkPickerColor();
};
