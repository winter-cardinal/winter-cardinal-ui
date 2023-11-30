/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerColorGradient } from "../d-theme-dark-picker-color-gradient";
import { loadThemeDarkEnUsPickerColor } from "./load-theme-dark-en-us-picker-color";

export const loadThemeDarkEnUsPickerColorGradient = (): void => {
	DThemeDark.set("DPickerColorGradient", DThemeDarkPickerColorGradient);
	loadThemeDarkEnUsPickerColor();
};
