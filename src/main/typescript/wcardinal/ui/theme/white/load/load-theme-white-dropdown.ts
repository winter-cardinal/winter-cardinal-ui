/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteDropdown } from "../d-theme-white-dropdown";

export const loadThemeWhiteDropdown = (): void => {
	DThemeWhite.set( "DDropdown", DThemeWhiteDropdown );
};
