/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogTime } from "../theme/default/d-theme-default-dialog-time";
import { loadThemeWhitePickerTime } from "./load-theme-default-picker-time";

export const loadThemeWhiteDialogTime = () => {
	DThemeWhite.set( "DDialogTime", DThemeWhiteDialogTime );
	loadThemeWhitePickerTime();
};
