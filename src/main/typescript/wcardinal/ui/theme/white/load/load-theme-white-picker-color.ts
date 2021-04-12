/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerColor } from "../d-theme-white-picker-color";

export const loadThemeWhitePickerColor = (): void => {
	DThemeWhite.set("DPickerColor", DThemeWhitePickerColor);
};
