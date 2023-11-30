/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColorGradient } from "../d-theme-dark-dialog-color-gradient";
import { loadThemeDarkEnUsPickerColorGradient } from "./load-theme-dark-en-us-picker-color-gradient";

export const loadThemeDarkEnUsDialogColorGradient = (): void => {
	DThemeDark.set("DDialogColorGradient", DThemeDarkDialogColorGradient);
	loadThemeDarkEnUsPickerColorGradient();
};
