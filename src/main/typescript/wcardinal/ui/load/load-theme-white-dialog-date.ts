/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogDate } from "../theme/white/d-theme-white-dialog-date";
import { loadThemeWhitePickerDate } from "./load-theme-white-picker-date";

export const loadThemeWhiteDialogDate = () => {
	DThemeWhite.set( "DDialogDate", DThemeWhiteDialogDate );
	loadThemeWhitePickerDate();
};
