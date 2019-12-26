/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogDate } from "../theme/default/d-theme-default-dialog-date";
import { loadThemeWhitePickerDate } from "./load-theme-default-picker-date";

export const loadThemeWhiteDialogDate = () => {
	DThemeWhite.set( "DDialogDate", DThemeWhiteDialogDate );
	loadThemeWhitePickerDate();
};
