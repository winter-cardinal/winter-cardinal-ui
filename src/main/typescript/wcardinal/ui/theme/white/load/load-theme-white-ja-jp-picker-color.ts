/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpPickerColor } from "../d-theme-white-ja-jp-picker-color";

export const loadThemeWhiteJaJpPickerColor = (): void => {
	DThemeWhite.set("DPickerColor", DThemeWhiteJaJpPickerColor);
};
