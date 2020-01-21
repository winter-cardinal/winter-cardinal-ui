/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderBarChosenVertical } from "../theme/white/d-theme-white-slider-bar-chosen-vertical";

export const loadThemeWhiteSliderBarChosenVertical = () => {
	DThemeWhite.set( "DSliderBarChosenVertical", DThemeWhiteSliderBarChosenVertical );
};
