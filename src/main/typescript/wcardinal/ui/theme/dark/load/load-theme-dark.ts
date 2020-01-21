/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../../d-themes";
import { DThemeDark } from "../d-theme-dark";

export const loadThemeDark = () => {
	DThemes.setDefaultThemeClass( DThemeDark );
};
