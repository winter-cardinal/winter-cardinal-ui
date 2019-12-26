/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteScrollBar } from "../theme/default/d-theme-default-scroll-bar";
import { DThemeWhiteScrollBarThumb } from "../theme/default/d-theme-default-scroll-bar-thumb";

export const loadThemeWhiteScrollBar = () => {
	DThemeWhite.set( "DScrollBar", DThemeWhiteScrollBar );
	DThemeWhite.set( "DScrollBarThumb", DThemeWhiteScrollBarThumb );
};
