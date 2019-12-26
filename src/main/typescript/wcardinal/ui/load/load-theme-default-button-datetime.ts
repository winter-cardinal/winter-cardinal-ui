/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonDatetime } from "../theme/white/d-theme-white-button-datetime";
import { loadThemeWhiteDialogDatetime } from "./load-theme-white-dialog-datetime";

export const loadThemeWhiteButtonDatetime = () => {
	DThemeWhite.set( "DButtonDatetime", DThemeWhiteButtonDatetime );
	loadThemeWhiteDialogDatetime();
};
