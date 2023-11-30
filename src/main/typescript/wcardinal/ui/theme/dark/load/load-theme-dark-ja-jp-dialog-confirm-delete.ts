/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpDialogConfirmDelete } from "../d-theme-dark-ja-jp-dialog-confirm-delete";

export const loadThemeDarkJaJpDialogConfirmDelete = (): void => {
	DThemeDark.set("DDialogConfirmDelete", DThemeDarkJaJpDialogConfirmDelete);
};
