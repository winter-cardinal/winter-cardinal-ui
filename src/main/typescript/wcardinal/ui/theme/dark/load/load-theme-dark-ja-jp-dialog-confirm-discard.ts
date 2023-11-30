/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkJaJpDialogConfirmDiscard } from "../d-theme-dark-ja-jp-dialog-confirm-discard";

export const loadThemeDarkJaJpDialogConfirmDiscard = (): void => {
	DThemeDark.set("DDialogConfirmDiscard", DThemeDarkJaJpDialogConfirmDiscard);
};
