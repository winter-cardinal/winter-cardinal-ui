/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderThumb } from "../d-theme-white-slider-thumb";

export const loadThemeWhiteSliderThumb = () => {
	DThemeWhite.set( "DSliderThumb", DThemeWhiteSliderThumb );
};
