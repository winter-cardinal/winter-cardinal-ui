/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogCommand } from "../theme/default/d-theme-default-dialog-command";

export const loadThemeWhiteDialogCommand = () => {
	DThemeWhite.set( "DDialogCommand", DThemeWhiteDialogCommand );
};
