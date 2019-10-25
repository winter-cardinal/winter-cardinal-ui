/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { DThemeWhite } from "../theme/white/d-theme-white";

export const loadThemeWhite = () => {
	DThemes.setDefaultThemeClass( DThemeWhite );
};
