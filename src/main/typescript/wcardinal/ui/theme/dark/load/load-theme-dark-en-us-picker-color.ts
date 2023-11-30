/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsPickerColor } from "../d-theme-dark-en-us-picker-color";

export const loadThemeDarkEnUsPickerColor = (): void => {
	DThemeDark.set("DPickerColor", DThemeDarkEnUsPickerColor);
};
