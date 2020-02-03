/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderTrackVertical } from "../d-theme-white-slider-track-vertical";

export const loadThemeWhiteSliderTrackVertical = () => {
	DThemeWhite.set( "DSliderTrackVertical", DThemeWhiteSliderTrackVertical );
};
