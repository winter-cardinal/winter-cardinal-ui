/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogSaveAs } from "../d-theme-white-dialog-save-as";

export const loadThemeWhiteDialogSaveAs = (): void => {
	DThemeWhite.set( "DDialogSaveAs", DThemeWhiteDialogSaveAs );
};
