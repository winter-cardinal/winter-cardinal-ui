/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsDialogConfirmDelete } from "../d-theme-white-en-us-dialog-confirm-delete";

export const loadThemeWhiteEnUsDialogConfirmDelete = (): void => {
	DThemeWhite.set("DDialogConfirmDelete", DThemeWhiteEnUsDialogConfirmDelete);
};
