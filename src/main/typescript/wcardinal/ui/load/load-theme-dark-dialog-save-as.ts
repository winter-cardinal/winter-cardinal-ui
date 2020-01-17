/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogSaveAs } from "../theme/dark/d-theme-dark-dialog-save-as";

export const loadThemeDarkDialogSaveAs = () => {
	DThemeDark.set( "DDialogSaveAs", DThemeDarkDialogSaveAs );
};
