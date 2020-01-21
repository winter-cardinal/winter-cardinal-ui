/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogCommand } from "../d-theme-white-dialog-command";

export const loadThemeWhiteDialogCommand = () => {
	DThemeWhite.set( "DDialogCommand", DThemeWhiteDialogCommand );
};
