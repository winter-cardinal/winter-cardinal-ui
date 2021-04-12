/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDatetime } from "../d-theme-dark-dialog-datetime";
import { loadThemeDarkPickerDatetime } from "./load-theme-dark-picker-datetime";

export const loadThemeDarkDialogDatetime = (): void => {
	DThemeDark.set("DDialogDatetime", DThemeDarkDialogDatetime);
	loadThemeDarkPickerDatetime();
};
