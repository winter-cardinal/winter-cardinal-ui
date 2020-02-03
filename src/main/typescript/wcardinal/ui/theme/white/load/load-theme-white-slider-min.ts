/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderMin } from "../d-theme-white-slider-min";

export const loadThemeWhiteSliderMin = () => {
	DThemeWhite.set( "DSliderMin", DThemeWhiteSliderMin );
};
