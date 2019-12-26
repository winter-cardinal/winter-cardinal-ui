/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDialogMessage } from "../theme/default/d-theme-default-dialog-message";

export const loadThemeDefaultDialogMessage = () => {
	DThemeDefault.set( "DDialogMessage", DThemeDefaultDialogMessage );
};
