/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsPickerTime } from "../d-theme-dark-en-us-picker-time";

export const loadThemeDarkEnUsPickerTime = (): void => {
	DThemeDark.set("DPickerTime", DThemeDarkEnUsPickerTime);
};
