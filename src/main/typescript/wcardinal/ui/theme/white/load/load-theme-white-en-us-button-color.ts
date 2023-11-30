/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteButtonColor } from "../d-theme-white-button-color";
import { loadThemeWhiteEnUsDialogColor } from "./load-theme-white-en-us-dialog-color";

export const loadThemeWhiteEnUsButtonColor = (): void => {
	DThemeWhite.set("DButtonColor", DThemeWhiteButtonColor);
	loadThemeWhiteEnUsDialogColor();
};
