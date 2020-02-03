/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderBarChosen } from "../d-theme-white-slider-bar-chosen";

export const loadThemeWhiteSliderBarChosen = () => {
	DThemeWhite.set( "DSliderBarChosen", DThemeWhiteSliderBarChosen );
};
