/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDatetime } from "../d-theme-dark-dialog-datetime";
import { loadThemeDarkJaJpPickerDatetime } from "./load-theme-dark-ja-jp-picker-datetime";

export const loadThemeDarkJaJpDialogDatetime = (): void => {
	DThemeDark.set("DDialogDatetime", DThemeDarkDialogDatetime);
	loadThemeDarkJaJpPickerDatetime();
};
