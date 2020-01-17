/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDialogCommand } from "../theme/dark/d-theme-dark-dialog-command";

export const loadThemeDarkDialogCommand = () => {
	DThemeDark.set( "DDialogCommand", DThemeDarkDialogCommand );
};
