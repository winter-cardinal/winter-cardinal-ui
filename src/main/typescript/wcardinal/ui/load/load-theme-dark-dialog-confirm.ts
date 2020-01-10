/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogConfirm } from "../theme/dark/d-theme-dark-dialog-confirm";
import { DThemeDarkDialogConfirmMessage } from "../theme/dark/d-theme-dark-dialog-confirm-message";

export const loadThemeDarkDialogConfirm = () => {
	DThemeDark.set( "DDialogConfirm", DThemeDarkDialogConfirm );
	DThemeDark.set( "DDialogConfirmMessage", DThemeDarkDialogConfirmMessage );
};
