/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogDatetime } from "../theme/default/d-theme-default-dialog-datetime";
import { loadThemeWhitePickerDatetime } from "./load-theme-default-picker-datetime";

export const loadThemeWhiteDialogDatetime = () => {
	DThemeWhite.set( "DDialogDatetime", DThemeWhiteDialogDatetime );
	loadThemeWhitePickerDatetime();
};
