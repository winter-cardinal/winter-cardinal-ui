/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkDialogMessage } from "../d-theme-dark-dialog-message";

export const loadThemeDarkDialogMessage = (): void => {
	DThemeDark.set( "DDialogMessage", DThemeDarkDialogMessage );
};
