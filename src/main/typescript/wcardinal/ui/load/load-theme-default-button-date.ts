/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonDate } from "../theme/default/d-theme-default-button-date";
import { loadThemeWhiteDialogDate } from "./load-theme-default-dialog-date";

export const loadThemeWhiteButtonDate = () => {
	DThemeWhite.set( "DButtonDate", DThemeWhiteButtonDate );
	loadThemeWhiteDialogDate();
};
