/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogConfirm } from "../theme/default/d-theme-default-dialog-confirm";
import { DThemeWhiteDialogConfirmMessage } from "../theme/default/d-theme-default-dialog-confirm-message";

export const loadThemeWhiteDialogConfirm = () => {
	DThemeWhite.set( "DDialogConfirm", DThemeWhiteDialogConfirm );
	DThemeWhite.set( "DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage );
};
