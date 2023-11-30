/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogConfirmMessage } from "../d-theme-white-dialog-confirm-message";
import { DThemeWhiteJaJpDialogConfirm } from "../d-theme-white-ja-jp-dialog-confirm";

export const loadThemeWhiteJaJpDialogConfirm = (): void => {
	DThemeWhite.set("DDialogConfirm", DThemeWhiteJaJpDialogConfirm);
	DThemeWhite.set("DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage);
};
