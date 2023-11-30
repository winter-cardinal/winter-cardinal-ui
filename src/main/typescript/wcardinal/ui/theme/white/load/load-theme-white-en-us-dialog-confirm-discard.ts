/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteEnUsDialogConfirmDiscard } from "../d-theme-white-en-us-dialog-confirm-discard";

export const loadThemeWhiteEnUsDialogConfirmDiscard = (): void => {
	DThemeWhite.set("DDialogConfirmDiscard", DThemeWhiteEnUsDialogConfirmDiscard);
};
