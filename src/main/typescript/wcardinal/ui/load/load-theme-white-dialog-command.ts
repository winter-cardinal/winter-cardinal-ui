/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogCommand } from "../theme/white/d-theme-white-dialog-command";

export const loadThemeWhiteDialogCommand = () => {
	DThemeWhite.set( "DDialogCommand", DThemeWhiteDialogCommand );
};
