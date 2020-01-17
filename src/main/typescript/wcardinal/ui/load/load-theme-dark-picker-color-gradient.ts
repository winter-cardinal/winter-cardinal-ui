/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkPickerColorGradient } from "../theme/dark/d-theme-dark-picker-color-gradient";
import { loadThemeDarkPickerColor } from "./load-theme-dark-picker-color";

export const loadThemeDarkPickerColorGradient = () => {
	DThemeDark.set( "DPickerColorGradient", DThemeDarkPickerColorGradient );
	loadThemeDarkPickerColor();
};
