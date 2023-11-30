/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogColor } from "../d-theme-dark-dialog-color";
import { loadThemeDarkJaJpPickerColor } from "./load-theme-dark-ja-jp-picker-color";

export const loadThemeDarkJaJpDialogColor = (): void => {
	DThemeDark.set("DDialogColor", DThemeDarkDialogColor);
	loadThemeDarkJaJpPickerColor();
};
