/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderHorizontal } from "../d-theme-white-slider-horizontal";

export const loadThemeWhiteSliderHorizontal = () => {
	DThemeWhite.set( "DSliderHorizontal", DThemeWhiteSliderHorizontal );
};
