/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkSlider } from "../d-theme-dark-slider";
import { DThemeDarkSliderHorizontal } from "../d-theme-dark-slider-horizontal";
import { DThemeDarkSliderLabel } from "../d-theme-dark-slider-label";
import { DThemeDarkSliderThumb } from "../d-theme-dark-slider-thumb";
import { DThemeDarkSliderTrack } from "../d-theme-dark-slider-track";
import { DThemeDarkSliderTrackHorizontal } from "../d-theme-dark-slider-track-horizontal";
import { DThemeDarkSliderTrackVertical } from "../d-theme-dark-slider-track-vertical";
import { DThemeDarkSliderValue } from "../d-theme-dark-slider-value";
import { DThemeDarkSliderVertical } from "../d-theme-dark-slider-vertical";

export const loadThemeDarkSlider = (): void => {
	DThemeDark.set("DSlider", DThemeDarkSlider);
	DThemeDark.set("DSliderValue", DThemeDarkSliderValue);
	DThemeDark.set("DSliderLabel", DThemeDarkSliderLabel);
	DThemeDark.set("DSliderThumb", DThemeDarkSliderThumb);
	DThemeDark.set("DSliderVertical", DThemeDarkSliderVertical);
	DThemeDark.set("DSliderHorizontal", DThemeDarkSliderHorizontal);
	DThemeDark.set("DSliderTrack", DThemeDarkSliderTrack);
	DThemeDark.set("DSliderTrackVertical", DThemeDarkSliderTrackVertical);
	DThemeDark.set("DSliderTrackHorizontal", DThemeDarkSliderTrackHorizontal);
};
