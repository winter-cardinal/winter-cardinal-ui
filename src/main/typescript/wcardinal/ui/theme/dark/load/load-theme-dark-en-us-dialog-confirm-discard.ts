/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkEnUsDialogConfirmDiscard } from "../d-theme-dark-en-us-dialog-confirm-discard";

export const loadThemeDarkEnUsDialogConfirmDiscard = (): void => {
	DThemeDark.set("DDialogConfirmDiscard", DThemeDarkEnUsDialogConfirmDiscard);
};
