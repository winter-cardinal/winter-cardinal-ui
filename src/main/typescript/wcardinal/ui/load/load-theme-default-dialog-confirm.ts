/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogConfirm } from "../theme/white/d-theme-white-dialog-confirm";
import { DThemeWhiteDialogConfirmMessage } from "../theme/white/d-theme-white-dialog-confirm-message";

export const loadThemeWhiteDialogConfirm = () => {
	DThemeWhite.set( "DDialogConfirm", DThemeWhiteDialogConfirm );
	DThemeWhite.set( "DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage );
};
