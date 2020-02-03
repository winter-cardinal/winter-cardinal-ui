/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderBarVertical } from "../d-theme-white-slider-bar-vertical";

export const loadThemeWhiteSliderBarVertical = () => {
	DThemeWhite.set( "DSliderBarVertical", DThemeWhiteSliderBarVertical );
};
