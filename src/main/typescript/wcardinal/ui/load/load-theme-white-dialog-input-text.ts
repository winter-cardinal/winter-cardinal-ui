/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogInputText } from "../theme/white/d-theme-white-dialog-input-text";

export const loadThemeWhiteDialogInputText = () => {
	DThemeWhite.set( "DDialogInputText", DThemeWhiteDialogInputText );
};
