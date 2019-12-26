/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteButtonColorGradient } from "../theme/default/d-theme-default-button-color-gradient";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-default-dialog-color-gradient";

export const loadThemeWhiteButtonColorGradient = () => {
	DThemeWhite.set( "DButtonColorGradient", DThemeWhiteButtonColorGradient );
	loadThemeWhiteDialogColorGradient();
};
