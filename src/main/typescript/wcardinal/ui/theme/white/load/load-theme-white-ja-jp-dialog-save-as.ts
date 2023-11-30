/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpDialogSaveAs } from "../d-theme-white-ja-jp-dialog-save-as";

export const loadThemeWhiteJaJpDialogSaveAs = (): void => {
	DThemeWhite.set("DDialogSaveAs", DThemeWhiteJaJpDialogSaveAs);
};
