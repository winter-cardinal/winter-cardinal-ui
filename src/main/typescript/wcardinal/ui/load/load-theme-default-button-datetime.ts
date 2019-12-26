/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonDatetime } from "../theme/default/d-theme-default-button-datetime";
import { loadThemeWhiteDialogDatetime } from "./load-theme-default-dialog-datetime";

export const loadThemeWhiteButtonDatetime = () => {
	DThemeWhite.set( "DButtonDatetime", DThemeWhiteButtonDatetime );
	loadThemeWhiteDialogDatetime();
};
