/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderRange } from "../d-theme-white-slider-range";

export const loadThemeWhiteSliderRange = () => {
	DThemeWhite.set( "DSliderRange", DThemeWhiteSliderRange );
};
