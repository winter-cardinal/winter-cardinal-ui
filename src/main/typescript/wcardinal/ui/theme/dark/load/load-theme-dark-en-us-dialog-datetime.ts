/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDatetime } from "../d-theme-dark-dialog-datetime";
import { loadThemeDarkEnUsPickerDatetime } from "./load-theme-dark-en-us-picker-datetime";

export const loadThemeDarkEnUsDialogDatetime = (): void => {
	DThemeDark.set("DDialogDatetime", DThemeDarkDialogDatetime);
	loadThemeDarkEnUsPickerDatetime();
};
