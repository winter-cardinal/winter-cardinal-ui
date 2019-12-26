/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogConfirmDiscard } from "../theme/default/d-theme-default-dialog-confirm-discard";

export const loadThemeWhiteDialogConfirmDiscard = () => {
	DThemeWhite.set( "DDialogConfirmDiscard", DThemeWhiteDialogConfirmDiscard );
};
