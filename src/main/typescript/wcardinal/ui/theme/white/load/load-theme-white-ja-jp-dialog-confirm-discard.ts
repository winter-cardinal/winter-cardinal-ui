/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteJaJpDialogConfirmDiscard } from "../d-theme-white-ja-jp-dialog-confirm-discard";

export const loadThemeWhiteJaJpDialogConfirmDiscard = (): void => {
	DThemeWhite.set("DDialogConfirmDiscard", DThemeWhiteJaJpDialogConfirmDiscard);
};
