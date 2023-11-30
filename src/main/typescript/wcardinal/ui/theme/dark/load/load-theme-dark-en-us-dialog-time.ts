/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogTime } from "../d-theme-dark-dialog-time";
import { loadThemeDarkEnUsPickerTime } from "./load-theme-dark-en-us-picker-time";

export const loadThemeDarkEnUsDialogTime = (): void => {
	DThemeDark.set("DDialogTime", DThemeDarkDialogTime);
	loadThemeDarkEnUsPickerTime();
};
