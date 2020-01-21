/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteContent } from "../d-theme-white-content";
import { DThemeWhitePane } from "../d-theme-white-pane";
import { loadThemeWhiteScrollBar } from "./load-theme-white-scroll-bar";

export const loadThemeWhitePane = () => {
	DThemeWhite.set( "DPane", DThemeWhitePane );
	DThemeWhite.set( "DContent", DThemeWhiteContent );
	loadThemeWhiteScrollBar();
};
