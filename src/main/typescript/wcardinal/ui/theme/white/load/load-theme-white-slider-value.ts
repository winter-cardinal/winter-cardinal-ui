/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderValue } from "../d-theme-white-slider-value";

export const loadThemeWhiteSliderValue = () => {
	DThemeWhite.set( "DSliderValue", DThemeWhiteSliderValue );
};
