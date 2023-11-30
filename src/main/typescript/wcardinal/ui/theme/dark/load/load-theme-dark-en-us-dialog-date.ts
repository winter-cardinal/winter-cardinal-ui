/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDate } from "../d-theme-dark-dialog-date";
import { loadThemeDarkEnUsPickerDate } from "./load-theme-dark-en-us-picker-date";

export const loadThemeDarkEnUsDialogDate = (): void => {
	DThemeDark.set("DDialogDate", DThemeDarkDialogDate);
	loadThemeDarkEnUsPickerDate();
};
