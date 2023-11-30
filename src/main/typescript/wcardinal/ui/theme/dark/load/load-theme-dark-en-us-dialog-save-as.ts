/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsDialogSaveAs } from "../d-theme-dark-en-us-dialog-save-as";

export const loadThemeDarkEnUsDialogSaveAs = (): void => {
	DThemeDark.set("DDialogSaveAs", DThemeDarkEnUsDialogSaveAs);
};
