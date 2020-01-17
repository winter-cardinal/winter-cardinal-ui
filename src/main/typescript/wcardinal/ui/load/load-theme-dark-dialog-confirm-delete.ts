/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogConfirmDelete } from "../theme/dark/d-theme-dark-dialog-confirm-delete";

export const loadThemeDarkDialogConfirmDelete = () => {
	DThemeDark.set( "DDialogConfirmDelete", DThemeDarkDialogConfirmDelete );
};
