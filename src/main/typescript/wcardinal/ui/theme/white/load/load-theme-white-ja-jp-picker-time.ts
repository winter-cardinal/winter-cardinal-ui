/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpPickerTime } from "../d-theme-white-ja-jp-picker-time";

export const loadThemeWhiteJaJpPickerTime = (): void => {
	DThemeWhite.set("DPickerTime", DThemeWhiteJaJpPickerTime);
};
