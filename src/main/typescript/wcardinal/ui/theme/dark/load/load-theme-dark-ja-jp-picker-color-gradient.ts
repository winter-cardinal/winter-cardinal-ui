/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerColorGradient } from "../d-theme-dark-picker-color-gradient";
import { loadThemeDarkJaJpPickerColor } from "./load-theme-dark-ja-jp-picker-color";

export const loadThemeDarkJaJpPickerColorGradient = (): void => {
	DThemeDark.set("DPickerColorGradient", DThemeDarkPickerColorGradient);
	loadThemeDarkJaJpPickerColor();
};
