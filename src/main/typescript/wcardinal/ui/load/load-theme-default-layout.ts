/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteLayout } from "../theme/default/d-theme-default-layout";
import { DThemeWhiteLayoutHorizontal } from "../theme/default/d-theme-default-layout-horizontal";
import { DThemeWhiteLayoutSpace } from "../theme/default/d-theme-default-layout-space";
import { DThemeWhiteLayoutVertical } from "../theme/default/d-theme-default-layout-vertical";

export const loadThemeWhiteLayout = () => {
	DThemeWhite.set( "DLayout", DThemeWhiteLayout );
	DThemeWhite.set( "DLayoutHorizontal", DThemeWhiteLayoutHorizontal );
	DThemeWhite.set( "DLayoutSpace", DThemeWhiteLayoutSpace );
	DThemeWhite.set( "DLayoutVertical", DThemeWhiteLayoutVertical );
};
