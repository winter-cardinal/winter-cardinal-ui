/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogConfirmDiscard } from "../theme/default/d-theme-default-dialog-confirm-discard";

export const loadThemeDefaultDialogConfirmDiscard = () => {
	DThemeDefault.set( "DDialogConfirmDiscard", DThemeDefaultDialogConfirmDiscard );
};
