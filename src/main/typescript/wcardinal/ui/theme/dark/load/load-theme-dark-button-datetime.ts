/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDatetime } from "../d-theme-dark-button-datetime";
import { loadThemeDarkDialogDatetime } from "./load-theme-dark-dialog-datetime";

export const loadThemeDarkButtonDatetime = (): void => {
	DThemeDark.set( "DButtonDatetime", DThemeDarkButtonDatetime );
	loadThemeDarkDialogDatetime();
};
