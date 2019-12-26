/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteButtonAmbient } from "../theme/white/d-theme-white-button-ambient";

export const loadThemeWhiteButtonAmbient = () => {
	DThemeWhite.set( "DButtonAmbient", DThemeWhiteButtonAmbient );
};
