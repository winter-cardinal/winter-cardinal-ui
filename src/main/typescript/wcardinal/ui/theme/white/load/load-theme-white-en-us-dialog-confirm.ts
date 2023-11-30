/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogConfirmMessage } from "../d-theme-white-dialog-confirm-message";
import { DThemeWhiteEnUsDialogConfirm } from "../d-theme-white-en-us-dialog-confirm";

export const loadThemeWhiteEnUsDialogConfirm = (): void => {
	DThemeWhite.set("DDialogConfirm", DThemeWhiteEnUsDialogConfirm);
	DThemeWhite.set("DDialogConfirmMessage", DThemeWhiteDialogConfirmMessage);
};
