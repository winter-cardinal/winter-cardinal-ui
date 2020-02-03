/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSliderTrackSelectedVertical } from "../d-theme-white-slider-track-selected-vertical";

export const loadThemeWhiteSliderTrackSelectedVertical = () => {
	DThemeWhite.set( "DSliderTrackSelectedVertical", DThemeWhiteSliderTrackSelectedVertical );
};
