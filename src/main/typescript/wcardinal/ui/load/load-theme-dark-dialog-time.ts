/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogTime } from "../theme/dark/d-theme-dark-dialog-time";
import { loadThemeDarkPickerTime } from "./load-theme-dark-picker-time";

export const loadThemeDarkDialogTime = () => {
	DThemeDark.set( "DDialogTime", DThemeDarkDialogTime );
	loadThemeDarkPickerTime();
};
