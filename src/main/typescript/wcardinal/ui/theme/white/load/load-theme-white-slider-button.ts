/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderButton } from "../d-theme-white-slider-button";

export const loadThemeWhiteSliderButton = () => {
	DThemeWhite.set( "DSliderButton", DThemeWhiteSliderButton );
};
