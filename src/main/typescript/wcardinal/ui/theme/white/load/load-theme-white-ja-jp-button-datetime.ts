/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDatetime } from "../d-theme-white-button-datetime";
import { loadThemeWhiteJaJpDialogDatetime } from "./load-theme-white-ja-jp-dialog-datetime";

export const loadThemeWhiteJaJpButtonDatetime = (): void => {
	DThemeWhite.set("DButtonDatetime", DThemeWhiteButtonDatetime);
	loadThemeWhiteJaJpDialogDatetime();
};
