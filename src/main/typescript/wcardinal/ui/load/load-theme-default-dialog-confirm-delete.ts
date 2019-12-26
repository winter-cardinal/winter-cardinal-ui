/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogConfirmDelete } from "../theme/default/d-theme-default-dialog-confirm-delete";

export const loadThemeWhiteDialogConfirmDelete = () => {
	DThemeWhite.set( "DDialogConfirmDelete", DThemeWhiteDialogConfirmDelete );
};
