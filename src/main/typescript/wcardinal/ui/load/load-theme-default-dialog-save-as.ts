/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogSaveAs } from "../theme/default/d-theme-default-dialog-save-as";

export const loadThemeDefaultDialogSaveAs = () => {
	DThemeDefault.set( "DDialogSaveAs", DThemeDefaultDialogSaveAs );
};
