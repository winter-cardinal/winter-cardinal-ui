/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDialogInputText } from "../theme/default/d-theme-default-dialog-input-text";

export const loadThemeWhiteDialogInputText = () => {
	DThemeWhite.set( "DDialogInputText", DThemeWhiteDialogInputText );
};
