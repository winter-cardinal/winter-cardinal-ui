/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsPickerTime } from "../d-theme-white-en-us-picker-time";

export const loadThemeWhiteEnUsPickerTime = (): void => {
	DThemeWhite.set("DPickerTime", DThemeWhiteEnUsPickerTime);
};
