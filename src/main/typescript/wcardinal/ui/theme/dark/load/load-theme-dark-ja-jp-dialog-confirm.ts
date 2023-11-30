/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogConfirmMessage } from "../d-theme-dark-dialog-confirm-message";
import { DThemeDarkJaJpDialogConfirm } from "../d-theme-dark-ja-jp-dialog-confirm";

export const loadThemeDarkJaJpDialogConfirm = (): void => {
	DThemeDark.set("DDialogConfirm", DThemeDarkJaJpDialogConfirm);
	DThemeDark.set("DDialogConfirmMessage", DThemeDarkDialogConfirmMessage);
};
