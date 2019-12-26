/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonColor } from "../theme/white/d-theme-white-button-color";
import { loadThemeWhiteDialogColor } from "./load-theme-white-dialog-color";

export const loadThemeWhiteButtonColor = () => {
	DThemeWhite.set( "DButtonColor", DThemeWhiteButtonColor );
	loadThemeWhiteDialogColor();
};
