/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpPickerTime } from "../d-theme-dark-ja-jp-picker-time";

export const loadThemeDarkJaJpPickerTime = (): void => {
	DThemeDark.set("DPickerTime", DThemeDarkJaJpPickerTime);
};
