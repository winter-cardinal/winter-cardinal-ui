/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { DThemeWhite } from "../theme/default/d-theme-default";

export const loadThemeWhite = () => {
	DThemes.setDefaultThemeClass( DThemeWhite );
};
