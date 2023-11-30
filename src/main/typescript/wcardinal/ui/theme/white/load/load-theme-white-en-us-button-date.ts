/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDate } from "../d-theme-white-button-date";
import { loadThemeWhiteEnUsDialogDate } from "./load-theme-white-en-us-dialog-date";

export const loadThemeWhiteEnUsButtonDate = (): void => {
	DThemeWhite.set("DButtonDate", DThemeWhiteButtonDate);
	loadThemeWhiteEnUsDialogDate();
};
