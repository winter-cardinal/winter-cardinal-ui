/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogConfirmMessage } from "../d-theme-dark-dialog-confirm-message";
import { DThemeDarkEnUsDialogConfirm } from "../d-theme-dark-en-us-dialog-confirm";

export const loadThemeDarkEnUsDialogConfirm = (): void => {
	DThemeDark.set("DDialogConfirm", DThemeDarkEnUsDialogConfirm);
	DThemeDark.set("DDialogConfirmMessage", DThemeDarkDialogConfirmMessage);
};
