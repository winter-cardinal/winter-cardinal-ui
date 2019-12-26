/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogConfirmDelete } from "../theme/default/d-theme-default-dialog-confirm-delete";

export const loadThemeDefaultDialogConfirmDelete = () => {
	DThemeDefault.set( "DDialogConfirmDelete", DThemeDefaultDialogConfirmDelete );
};
