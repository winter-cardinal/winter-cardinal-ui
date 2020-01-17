/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderButton } from "../theme/white/d-theme-white-slider-button";

export const loadThemeWhiteSliderButton = () => {
	DThemeWhite.set( "DSliderButton", DThemeWhiteSliderButton );
};