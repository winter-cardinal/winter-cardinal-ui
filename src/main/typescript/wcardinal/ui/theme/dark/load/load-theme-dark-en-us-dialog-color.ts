/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColor } from "../d-theme-dark-dialog-color";
import { loadThemeDarkEnUsPickerColor } from "./load-theme-dark-en-us-picker-color";

export const loadThemeDarkEnUsDialogColor = (): void => {
	DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
	loadThemeDarkEnUsPickerColor();
};
