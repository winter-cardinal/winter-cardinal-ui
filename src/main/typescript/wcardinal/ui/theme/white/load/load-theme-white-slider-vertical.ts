/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderVertical } from "../theme/white/d-theme-white-slider-vertical";

export const loadThemeWhiteSliderVertical = () => {
	DThemeWhite.set( "DSliderVertical", DThemeWhiteSliderVertical );
};
