/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogInputText } from "../theme/default/d-theme-default-dialog-input-text";

export const loadThemeDefaultDialogInputText = () => {
	DThemeDefault.set( "DDialogInputText", DThemeDefaultDialogInputText );
};
