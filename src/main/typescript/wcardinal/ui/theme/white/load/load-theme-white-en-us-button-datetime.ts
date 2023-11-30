/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDatetime } from "../d-theme-white-button-datetime";
import { loadThemeWhiteEnUsDialogDatetime } from "./load-theme-white-en-us-dialog-datetime";

export const loadThemeWhiteEnUsButtonDatetime = (): void => {
	DThemeWhite.set("DButtonDatetime", DThemeWhiteButtonDatetime);
	loadThemeWhiteEnUsDialogDatetime();
};
