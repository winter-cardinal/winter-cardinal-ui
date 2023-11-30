/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogTime } from "../d-theme-dark-dialog-time";
import { loadThemeDarkJaJpPickerTime } from "./load-theme-dark-ja-jp-picker-time";

export const loadThemeDarkJaJpDialogTime = (): void => {
	DThemeDark.set("DDialogTime", DThemeDarkDialogTime);
	loadThemeDarkJaJpPickerTime();
};
