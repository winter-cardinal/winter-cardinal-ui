/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultLayout } from "../theme/default/d-theme-default-layout";
import { DThemeDefaultLayoutHorizontal } from "../theme/default/d-theme-default-layout-horizontal";
import { DThemeDefaultLayoutSpace } from "../theme/default/d-theme-default-layout-space";
import { DThemeDefaultLayoutVertical } from "../theme/default/d-theme-default-layout-vertical";

export const loadThemeDefaultLayout = () => {
	DThemeDefault.set( "DLayout", DThemeDefaultLayout );
	DThemeDefault.set( "DLayoutHorizontal", DThemeDefaultLayoutHorizontal );
	DThemeDefault.set( "DLayoutSpace", DThemeDefaultLayoutSpace );
	DThemeDefault.set( "DLayoutVertical", DThemeDefaultLayoutVertical );
};
