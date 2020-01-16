/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../theme/d-themes";
import { DThemeDark } from "../theme/dark/d-theme-dark";

export const loadThemeDark = () => {
	DThemes.setDefaultThemeClass( DThemeDark );
};
