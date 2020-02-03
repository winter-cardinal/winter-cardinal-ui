/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderBarChosenVertical } from "../d-theme-white-slider-bar-chosen-vertical";

export const loadThemeWhiteSliderBarChosenVertical = () => {
	DThemeWhite.set( "DSliderBarChosenVertical", DThemeWhiteSliderBarChosenVertical );
};
