/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSlider } from "../d-theme-white-slider";

export const loadThemeWhiteSlider = () => {
	DThemeWhite.set( "DSlider", DThemeWhiteSlider );
};
