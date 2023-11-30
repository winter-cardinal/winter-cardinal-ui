/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpPickerColor } from "../d-theme-dark-ja-jp-picker-color";

export const loadThemeDarkJaJpPickerColor = (): void => {
	DThemeDark.set("DPickerColor", DThemeDarkJaJpPickerColor);
};
