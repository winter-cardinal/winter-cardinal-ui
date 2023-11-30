/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonSelect } from "../d-theme-white-button-select";
import { loadThemeWhiteEnUsDialogSelect } from "./load-theme-white-en-us-dialog-select";

export const loadThemeWhiteEnUsButtonSelect = (): void => {
	DThemeWhite.set("DButtonSelect", DThemeWhiteButtonSelect);
	loadThemeWhiteEnUsDialogSelect();
};
