/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpDialogConfirmDelete } from "../d-theme-white-ja-jp-dialog-confirm-delete";

export const loadThemeWhiteJaJpDialogConfirmDelete = (): void => {
	DThemeWhite.set("DDialogConfirmDelete", DThemeWhiteJaJpDialogConfirmDelete);
};
