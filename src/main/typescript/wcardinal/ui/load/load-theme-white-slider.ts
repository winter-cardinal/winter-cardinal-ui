/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSlider } from "../theme/white/d-theme-white-slider";

export const loadThemeWhiteSlider = () => {
	DThemeWhite.set( "DSlider", DThemeWhiteSlider );
};
