/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSlider } from "../d-theme-white-slider";
import { DThemeWhiteSliderHorizontal } from "../d-theme-white-slider-horizontal";
import { DThemeWhiteSliderMax } from "../d-theme-white-slider-max";
import { DThemeWhiteSliderMin } from "../d-theme-white-slider-min";
import { DThemeWhiteSliderRange } from "../d-theme-white-slider-range";
import { DThemeWhiteSliderRangeHorizontal } from "../d-theme-white-slider-range-horizontal";
import { DThemeWhiteSliderRangeVertical } from "../d-theme-white-slider-range-vertical";
import { DThemeWhiteSliderThumb } from "../d-theme-white-slider-thumb";
import { DThemeWhiteSliderTrack } from "../d-theme-white-slider-track";
import { DThemeWhiteSliderTrackHorizontal } from "../d-theme-white-slider-track-horizontal";
import { DThemeWhiteSliderTrackSelected } from "../d-theme-white-slider-track-selected";
import { DThemeWhiteSliderTrackSelectedHorizontal } from "../d-theme-white-slider-track-selected-horizontal";
import { DThemeWhiteSliderTrackSelectedVertical } from "../d-theme-white-slider-track-selected-vertical";
import { DThemeWhiteSliderTrackVertical } from "../d-theme-white-slider-track-vertical";
import { DThemeWhiteSliderValue } from "../d-theme-white-slider-value";
import { DThemeWhiteSliderVertical } from "../d-theme-white-slider-vertical";

export const loadThemeWhiteSlider = () => {
	DThemeWhite.set( "DSlider", DThemeWhiteSlider );
	DThemeWhite.set( "DSliderValue", DThemeWhiteSliderValue );
	DThemeWhite.set( "DSliderMax", DThemeWhiteSliderMax );
	DThemeWhite.set( "DSliderMin", DThemeWhiteSliderMin );
	DThemeWhite.set( "DSliderThumb", DThemeWhiteSliderThumb );
	DThemeWhite.set( "DSliderVertical", DThemeWhiteSliderVertical );
	DThemeWhite.set( "DSliderHorizontal", DThemeWhiteSliderHorizontal );
	DThemeWhite.set( "DSliderRange", DThemeWhiteSliderRange );
	DThemeWhite.set( "DSliderRangeVertical", DThemeWhiteSliderRangeVertical );
	DThemeWhite.set( "DSliderRangeHorizontal", DThemeWhiteSliderRangeHorizontal );
	DThemeWhite.set( "DSliderTrack", DThemeWhiteSliderTrack );
	DThemeWhite.set( "DSliderTrackVertical", DThemeWhiteSliderTrackVertical );
	DThemeWhite.set( "DSliderTrackHorizontal", DThemeWhiteSliderTrackHorizontal );
	DThemeWhite.set( "DSliderTrackSelected", DThemeWhiteSliderTrackSelected );
	DThemeWhite.set( "DSliderTrackSelectedVertical", DThemeWhiteSliderTrackSelectedVertical );
	DThemeWhite.set( "DSliderTrackSelectedHorizontal", DThemeWhiteSliderTrackSelectedHorizontal );
};
