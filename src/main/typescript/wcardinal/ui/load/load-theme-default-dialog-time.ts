/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogTime } from "../theme/default/d-theme-default-dialog-time";
import { loadThemeDefaultPickerTime } from "./load-theme-default-picker-time";

export const loadThemeDefaultDialogTime = () => {
	DThemeDefault.set( "DDialogTime", DThemeDefaultDialogTime );
	loadThemeDefaultPickerTime();
};
