/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderRangeVertical } from "../d-theme-white-slider-range-vertical";

export const loadThemeWhiteSliderRangeVertical = () => {
	DThemeWhite.set( "DSliderRangeVertical", DThemeWhiteSliderRangeVertical );
};
