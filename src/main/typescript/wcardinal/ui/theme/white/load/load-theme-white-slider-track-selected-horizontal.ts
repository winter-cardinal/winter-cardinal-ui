/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderTrackSelectedHorizontal } from "../d-theme-white-slider-track-selected-horizontal";

export const loadThemeWhiteSliderTrackSelectedHorizontal = () => {
	DThemeWhite.set( "DSliderTrackSelectedHorizontal", DThemeWhiteSliderTrackSelectedHorizontal );
};
