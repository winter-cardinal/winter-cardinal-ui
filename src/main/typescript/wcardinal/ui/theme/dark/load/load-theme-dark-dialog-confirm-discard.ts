/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogConfirmDiscard } from "../d-theme-dark-dialog-confirm-discard";

export const loadThemeDarkDialogConfirmDiscard = (): void => {
	DThemeDark.set( "DDialogConfirmDiscard", DThemeDarkDialogConfirmDiscard );
};
