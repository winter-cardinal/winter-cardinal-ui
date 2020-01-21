/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogConfirm } from "../d-theme-white-dialog-confirm";
import { DThemeWhiteDialogConfirmMessage } from "../d-theme-white-dialog-confirm-message";

export const loadThemeWhiteDialogConfirm = () => {
	DThemeWhite.set( "DDialogConfirm", DThemeWhiteDialogConfirm );
	DThemeWhite.set( "DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage );
};
