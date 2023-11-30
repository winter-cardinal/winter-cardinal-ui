/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsDialogSaveAs } from "../d-theme-white-en-us-dialog-save-as";

export const loadThemeWhiteEnUsDialogSaveAs = (): void => {
	DThemeWhite.set("DDialogSaveAs", DThemeWhiteEnUsDialogSaveAs);
};
