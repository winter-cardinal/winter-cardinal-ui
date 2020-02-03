/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderTrackHorizontal } from "../d-theme-white-slider-track-horizontal";

export const loadThemeWhiteSliderTrackHorizontal = () => {
	DThemeWhite.set( "DSliderTrackHorizontal", DThemeWhiteSliderTrackHorizontal );
};
