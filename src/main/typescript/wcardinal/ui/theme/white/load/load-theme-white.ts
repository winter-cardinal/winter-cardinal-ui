/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemes } from "../../d-themes";
import { DThemeWhite } from "../d-theme-white";

export const loadThemeWhite = (): void => {
	DThemes.setDefaultThemeClass(DThemeWhite);
};
