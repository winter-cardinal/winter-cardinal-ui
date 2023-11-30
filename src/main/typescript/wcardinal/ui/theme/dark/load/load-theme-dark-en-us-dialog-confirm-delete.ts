/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsDialogConfirmDelete } from "../d-theme-dark-en-us-dialog-confirm-delete";

export const loadThemeDarkEnUsDialogConfirmDelete = (): void => {
	DThemeDark.set("DDialogConfirmDelete", DThemeDarkEnUsDialogConfirmDelete);
};
