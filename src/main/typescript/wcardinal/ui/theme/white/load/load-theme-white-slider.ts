/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSlider } from "../d-theme-white-slider";
import { DThemeWhiteSliderHorizontal } from "../d-theme-white-slider-horizontal";
import { DThemeWhiteSliderLabel } from "../d-theme-white-slider-label";
import { DThemeWhiteSliderThumb } from "../d-theme-white-slider-thumb";
import { DThemeWhiteSliderTrack } from "../d-theme-white-slider-track";
import { DThemeWhiteSliderTrackHorizontal } from "../d-theme-white-slider-track-horizontal";
import { DThemeWhiteSliderTrackVertical } from "../d-theme-white-slider-track-vertical";
import { DThemeWhiteSliderValue } from "../d-theme-white-slider-value";
import { DThemeWhiteSliderVertical } from "../d-theme-white-slider-vertical";

export const loadThemeWhiteSlider = (): void => {
	DThemeWhite.set( "DSlider", DThemeWhiteSlider );
	DThemeWhite.set( "DSliderValue", DThemeWhiteSliderValue );
	DThemeWhite.set( "DSliderLabel", DThemeWhiteSliderLabel );
	DThemeWhite.set( "DSliderThumb", DThemeWhiteSliderThumb );
	DThemeWhite.set( "DSliderVertical", DThemeWhiteSliderVertical );
	DThemeWhite.set( "DSliderHorizontal", DThemeWhiteSliderHorizontal );
	DThemeWhite.set( "DSliderTrack", DThemeWhiteSliderTrack );
	DThemeWhite.set( "DSliderTrackVertical", DThemeWhiteSliderTrackVertical );
	DThemeWhite.set( "DSliderTrackHorizontal", DThemeWhiteSliderTrackHorizontal );
};
