/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColorGradient } from "../d-theme-dark-dialog-color-gradient";
import { loadThemeDarkJaJpPickerColorGradient } from "./load-theme-dark-ja-jp-picker-color-gradient";

export const loadThemeDarkJaJpDialogColorGradient = (): void => {
	DThemeDark.set("DDialogColorGradient", DThemeDarkDialogColorGradient);
	loadThemeDarkJaJpPickerColorGradient();
};
