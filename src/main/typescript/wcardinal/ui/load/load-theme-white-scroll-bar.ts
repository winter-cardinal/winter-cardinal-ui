/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteScrollBar } from "../theme/white/d-theme-white-scroll-bar";
import { DThemeWhiteScrollBarThumb } from "../theme/white/d-theme-white-scroll-bar-thumb";

export const loadThemeWhiteScrollBar = () => {
	DThemeWhite.set( "DScrollBar", DThemeWhiteScrollBar );
	DThemeWhite.set( "DScrollBarThumb", DThemeWhiteScrollBarThumb );
};
