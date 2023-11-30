/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDate } from "../d-theme-white-button-date";
import { loadThemeWhiteJaJpDialogDate } from "./load-theme-white-ja-jp-dialog-date";

export const loadThemeWhiteJaJpButtonDate = (): void => {
	DThemeWhite.set("DButtonDate", DThemeWhiteButtonDate);
	loadThemeWhiteJaJpDialogDate();
};
