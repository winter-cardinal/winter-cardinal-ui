/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDate } from "../d-theme-dark-dialog-date";
import { loadThemeDarkJaJpPickerDate } from "./load-theme-dark-ja-jp-picker-date";

export const loadThemeDarkJaJpDialogDate = (): void => {
	DThemeDark.set("DDialogDate", DThemeDarkDialogDate);
	loadThemeDarkJaJpPickerDate();
};
