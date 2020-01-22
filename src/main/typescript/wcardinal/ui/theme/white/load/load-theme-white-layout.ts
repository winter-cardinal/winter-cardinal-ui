/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteLayout } from "../d-theme-white-layout";
import { DThemeWhiteLayoutHorizontal } from "../d-theme-white-layout-horizontal";
import { DThemeWhiteLayoutSpace } from "../d-theme-white-layout-space";
import { DThemeWhiteLayoutVertical } from "../d-theme-white-layout-vertical";

export const loadThemeWhiteLayout = () => {
	DThemeWhite.set( "DLayout", DThemeWhiteLayout );
	DThemeWhite.set( "DLayoutHorizontal", DThemeWhiteLayoutHorizontal );
	DThemeWhite.set( "DLayoutSpace", DThemeWhiteLayoutSpace );
	DThemeWhite.set( "DLayoutVertical", DThemeWhiteLayoutVertical );
};
