/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogConfirmDiscard } from "../theme/white/d-theme-white-dialog-confirm-discard";

export const loadThemeWhiteDialogConfirmDiscard = () => {
	DThemeWhite.set( "DDialogConfirmDiscard", DThemeWhiteDialogConfirmDiscard );
};
