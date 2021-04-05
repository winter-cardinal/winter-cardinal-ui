/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonDate } from "../d-theme-white-button-date";
import { loadThemeWhiteDialogDate } from "./load-theme-white-dialog-date";

export const loadThemeWhiteButtonDate = (): void => {
	DThemeWhite.set( "DButtonDate", DThemeWhiteButtonDate );
	loadThemeWhiteDialogDate();
};
