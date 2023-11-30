/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsPickerColor } from "../d-theme-white-en-us-picker-color";

export const loadThemeWhiteEnUsPickerColor = (): void => {
	DThemeWhite.set("DPickerColor", DThemeWhiteEnUsPickerColor);
};
