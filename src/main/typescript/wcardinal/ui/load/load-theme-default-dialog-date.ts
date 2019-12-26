/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogDate } from "../theme/default/d-theme-default-dialog-date";
import { loadThemeDefaultPickerDate } from "./load-theme-default-picker-date";

export const loadThemeDefaultDialogDate = () => {
	DThemeDefault.set( "DDialogDate", DThemeDefaultDialogDate );
	loadThemeDefaultPickerDate();
};
