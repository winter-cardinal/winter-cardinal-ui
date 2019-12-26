/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogDatetime } from "../theme/white/d-theme-white-dialog-datetime";
import { loadThemeWhitePickerDatetime } from "./load-theme-white-picker-datetime";

export const loadThemeWhiteDialogDatetime = () => {
	DThemeWhite.set( "DDialogDatetime", DThemeWhiteDialogDatetime );
	loadThemeWhitePickerDatetime();
};
