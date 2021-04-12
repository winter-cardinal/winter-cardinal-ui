/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkPickerColor } from "../d-theme-dark-picker-color";

export const loadThemeDarkPickerColor = (): void => {
	DThemeDark.set("DPickerColor", DThemeDarkPickerColor);
};
