/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkLayout } from "../d-theme-dark-layout";
import { DThemeDarkLayoutHorizontal } from "../d-theme-dark-layout-horizontal";
import { DThemeDarkLayoutSpace } from "../d-theme-dark-layout-space";
import { DThemeDarkLayoutVertical } from "../d-theme-dark-layout-vertical";

export const loadThemeDarkLayout = () => {
	DThemeDark.set( "DLayout", DThemeDarkLayout );
	DThemeDark.set( "DLayoutHorizontal", DThemeDarkLayoutHorizontal );
	DThemeDark.set( "DLayoutSpace", DThemeDarkLayoutSpace );
	DThemeDark.set( "DLayoutVertical", DThemeDarkLayoutVertical );
};
