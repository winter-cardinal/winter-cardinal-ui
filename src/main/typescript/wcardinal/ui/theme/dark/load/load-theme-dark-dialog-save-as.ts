/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogSaveAs } from "../d-theme-dark-dialog-save-as";

export const loadThemeDarkDialogSaveAs = (): void => {
	DThemeDark.set( "DDialogSaveAs", DThemeDarkDialogSaveAs );
};
