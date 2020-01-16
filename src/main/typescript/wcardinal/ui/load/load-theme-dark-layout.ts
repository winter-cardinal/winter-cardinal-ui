/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkLayout } from "../theme/dark/d-theme-dark-layout";
import { DThemeDarkLayoutHorizontal } from "../theme/dark/d-theme-dark-layout-horizontal";
import { DThemeDarkLayoutSpace } from "../theme/dark/d-theme-dark-layout-space";
import { DThemeDarkLayoutVertical } from "../theme/dark/d-theme-dark-layout-vertical";

export const loadThemeDarkLayout = () => {
	DThemeDark.set( "DLayout", DThemeDarkLayout );
	DThemeDark.set( "DLayoutHorizontal", DThemeDarkLayoutHorizontal );
	DThemeDark.set( "DLayoutSpace", DThemeDarkLayoutSpace );
	DThemeDark.set( "DLayoutVertical", DThemeDarkLayoutVertical );
};
