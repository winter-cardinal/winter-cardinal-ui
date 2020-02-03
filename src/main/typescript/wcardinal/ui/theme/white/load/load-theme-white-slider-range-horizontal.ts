/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderRangeHorizontal } from "../d-theme-white-slider-range-horizontal";

export const loadThemeWhiteSliderRange = () => {
	DThemeWhite.set( "DSliderRangeHorizontal", DThemeWhiteSliderRangeHorizontal );
};
