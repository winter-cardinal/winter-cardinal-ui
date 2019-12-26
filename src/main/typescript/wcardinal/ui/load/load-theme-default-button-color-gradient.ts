/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonColorGradient } from "../theme/white/d-theme-white-button-color-gradient";
import { loadThemeWhiteDialogColorGradient } from "./load-theme-white-dialog-color-gradient";

export const loadThemeWhiteButtonColorGradient = () => {
	DThemeWhite.set( "DButtonColorGradient", DThemeWhiteButtonColorGradient );
	loadThemeWhiteDialogColorGradient();
};
