/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogCommand } from "../theme/default/d-theme-default-dialog-command";

export const loadThemeDefaultDialogCommand = () => {
	DThemeDefault.set( "DDialogCommand", DThemeDefaultDialogCommand );
};
