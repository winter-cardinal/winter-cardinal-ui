/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogConfirmDelete } from "../theme/white/d-theme-white-dialog-confirm-delete";

export const loadThemeWhiteDialogConfirmDelete = () => {
	DThemeWhite.set( "DDialogConfirmDelete", DThemeWhiteDialogConfirmDelete );
};
