/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkButtonDatetime } from "../d-theme-dark-button-datetime";
import { loadThemeDarkEnUsDialogDatetime } from "./load-theme-dark-en-us-dialog-datetime";

export const loadThemeDarkEnUsButtonDatetime = (): void => {
	DThemeDark.set("DButtonDatetime", DThemeDarkButtonDatetime);
	loadThemeDarkEnUsDialogDatetime();
};
