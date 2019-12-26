/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultButtonColorGradient } from "../theme/default/d-theme-default-button-color-gradient";
import { loadThemeDefaultDialogColorGradient } from "./load-theme-default-dialog-color-gradient";

export const loadThemeDefaultButtonColorGradient = () => {
	DThemeDefault.set( "DButtonColorGradient", DThemeDefaultButtonColorGradient );
	loadThemeDefaultDialogColorGradient();
};
