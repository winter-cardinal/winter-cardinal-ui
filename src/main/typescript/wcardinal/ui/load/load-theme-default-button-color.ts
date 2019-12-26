/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonColor } from "../theme/default/d-theme-default-button-color";
import { loadThemeDefaultDialogColor } from "./load-theme-default-dialog-color";

export const loadThemeDefaultButtonColor = () => {
	DThemeDefault.set( "DButtonColor", DThemeDefaultButtonColor );
	loadThemeDefaultDialogColor();
};
