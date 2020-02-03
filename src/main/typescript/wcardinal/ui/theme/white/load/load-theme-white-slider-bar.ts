/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSliderBar } from "../theme/white/d-theme-white-slider-bar";

export const loadThemeWhiteSliderBar = () => {
	DThemeWhite.set( "DSliderBar", DThemeWhiteSliderBar );
};
