/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogSaveAs } from "../theme/white/d-theme-white-dialog-save-as";

export const loadThemeWhiteDialogSaveAs = () => {
	DThemeWhite.set( "DDialogSaveAs", DThemeWhiteDialogSaveAs );
};
