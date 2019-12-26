/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogDatetime } from "../theme/default/d-theme-default-dialog-datetime";
import { loadThemeDefaultPickerDatetime } from "./load-theme-default-picker-datetime";

export const loadThemeDefaultDialogDatetime = () => {
	DThemeDefault.set( "DDialogDatetime", DThemeDefaultDialogDatetime );
	loadThemeDefaultPickerDatetime();
};
