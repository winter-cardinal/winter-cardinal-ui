/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonColor } from "../theme/default/d-theme-default-button-color";
import { loadThemeWhiteDialogColor } from "./load-theme-default-dialog-color";

export const loadThemeWhiteButtonColor = () => {
	DThemeWhite.set( "DButtonColor", DThemeWhiteButtonColor );
	loadThemeWhiteDialogColor();
};
