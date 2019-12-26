/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogSaveAs } from "../theme/default/d-theme-default-dialog-save-as";

export const loadThemeWhiteDialogSaveAs = () => {
	DThemeWhite.set( "DDialogSaveAs", DThemeWhiteDialogSaveAs );
};
