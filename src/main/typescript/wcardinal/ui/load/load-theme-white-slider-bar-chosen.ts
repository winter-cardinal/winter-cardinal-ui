/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderBarChosen } from "../theme/white/d-theme-white-slider-bar-chosen";

export const loadThemeWhiteSliderBarChosen = () => {
	DThemeWhite.set( "DSliderBarChosen", DThemeWhiteSliderBarChosen );
};