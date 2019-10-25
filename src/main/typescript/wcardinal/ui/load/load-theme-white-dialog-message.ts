/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteDialogMessage } from "../theme/white/d-theme-white-dialog-message";

export const loadThemeWhiteDialogMessage = () => {
	DThemeWhite.set( "DDialogMessage", DThemeWhiteDialogMessage );
};
