/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogTime } from "../d-theme-dark-dialog-time";
import { loadThemeDarkPickerTime } from "./load-theme-dark-picker-time";

export const loadThemeDarkDialogTime = (): void => {
	DThemeDark.set("DDialogTime", DThemeDarkDialogTime);
	loadThemeDarkPickerTime();
};
