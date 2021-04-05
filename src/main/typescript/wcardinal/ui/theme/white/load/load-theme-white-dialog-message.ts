/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDialogMessage } from "../d-theme-white-dialog-message";

export const loadThemeWhiteDialogMessage = (): void => {
	DThemeWhite.set( "DDialogMessage", DThemeWhiteDialogMessage );
};
