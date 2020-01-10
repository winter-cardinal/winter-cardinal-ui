/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogConfirmDiscard } from "../theme/dark/d-theme-dark-dialog-confirm-discard";

export const loadThemeDarkDialogConfirmDiscard = () => {
	DThemeDark.set( "DDialogConfirmDiscard", DThemeDarkDialogConfirmDiscard );
};
