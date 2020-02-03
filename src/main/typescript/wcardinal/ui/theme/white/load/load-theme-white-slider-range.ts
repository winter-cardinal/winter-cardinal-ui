/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderRange } from "../theme/white/d-theme-white-slider-range";

export const loadThemeWhiteSliderRange = () => {
	DThemeWhite.set( "DSliderRange", DThemeWhiteSliderRange );
};
