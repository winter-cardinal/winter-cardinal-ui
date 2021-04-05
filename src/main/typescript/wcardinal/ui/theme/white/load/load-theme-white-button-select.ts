/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonSelect } from "../d-theme-white-button-select";
import { loadThemeWhiteDialogSelect } from "./load-theme-white-dialog-select";

export const loadThemeWhiteButtonSelect = (): void => {
	DThemeWhite.set( "DButtonSelect", DThemeWhiteButtonSelect );
	loadThemeWhiteDialogSelect();
};
