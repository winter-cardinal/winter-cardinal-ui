/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderMax } from "../theme/white/d-theme-white-slider-max";

export const loadThemeWhiteSliderMax = () => {
	DThemeWhite.set( "DSliderMax", DThemeWhiteSliderMax );
};
