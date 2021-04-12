/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhitePickerTime } from "../d-theme-white-picker-time";

export const loadThemeWhitePickerTime = (): void => {
	DThemeWhite.set("DPickerTime", DThemeWhitePickerTime);
};
