/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogConfirmDelete } from "../d-theme-white-dialog-confirm-delete";

export const loadThemeWhiteDialogConfirmDelete = (): void => {
	DThemeWhite.set( "DDialogConfirmDelete", DThemeWhiteDialogConfirmDelete );
};
