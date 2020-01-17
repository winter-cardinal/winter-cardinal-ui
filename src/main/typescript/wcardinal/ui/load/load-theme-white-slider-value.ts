/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderValue } from "../theme/white/d-theme-white-slider-value";

export const loadThemeWhiteSliderValue = () => {
	DThemeWhite.set( "DSliderValue", DThemeWhiteSliderValue );
};