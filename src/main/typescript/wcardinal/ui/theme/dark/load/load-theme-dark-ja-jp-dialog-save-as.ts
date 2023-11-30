/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpDialogSaveAs } from "../d-theme-dark-ja-jp-dialog-save-as";

export const loadThemeDarkJaJpDialogSaveAs = (): void => {
	DThemeDark.set("DDialogSaveAs", DThemeDarkJaJpDialogSaveAs);
};
