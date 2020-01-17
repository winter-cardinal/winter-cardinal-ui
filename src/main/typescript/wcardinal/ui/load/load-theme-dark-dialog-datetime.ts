/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogDatetime } from "../theme/dark/d-theme-dark-dialog-datetime";
import { loadThemeDarkPickerDatetime } from "./load-theme-dark-picker-datetime";

export const loadThemeDarkDialogDatetime = () => {
	DThemeDark.set( "DDialogDatetime", DThemeDarkDialogDatetime );
	loadThemeDarkPickerDatetime();
};
