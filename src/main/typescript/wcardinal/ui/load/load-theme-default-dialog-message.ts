/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogMessage } from "../theme/default/d-theme-default-dialog-message";

export const loadThemeWhiteDialogMessage = () => {
	DThemeWhite.set( "DDialogMessage", DThemeWhiteDialogMessage );
};
