/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { DThemeDefault } from "../theme/default/d-theme-default";

export const loadThemeDefault = () => {
	DThemes.setDefaultThemeClass( DThemeDefault );
};
