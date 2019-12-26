/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogConfirm } from "../theme/default/d-theme-default-dialog-confirm";
import { DThemeDefaultDialogConfirmMessage } from "../theme/default/d-theme-default-dialog-confirm-message";

export const loadThemeDefaultDialogConfirm = () => {
	DThemeDefault.set( "DDialogConfirm", DThemeDefaultDialogConfirm );
	DThemeDefault.set( "DDialogConfirmMessage", DThemeDefaultDialogConfirmMessage );
};
