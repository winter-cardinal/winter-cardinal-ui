/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogTime } from "../d-theme-white-dialog-time";
import { loadThemeWhitePickerTime } from "./load-theme-white-picker-time";

export const loadThemeWhiteDialogTime = () => {
	DThemeWhite.set( "DDialogTime", DThemeWhiteDialogTime );
	loadThemeWhitePickerTime();
};
