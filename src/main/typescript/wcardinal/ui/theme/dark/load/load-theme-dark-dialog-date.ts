/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogDate } from "../d-theme-dark-dialog-date";
import { loadThemeDarkPickerDate } from "./load-theme-dark-picker-date";

export const loadThemeDarkDialogDate = () => {
	DThemeDark.set( "DDialogDate", DThemeDarkDialogDate );
	loadThemeDarkPickerDate();
};
