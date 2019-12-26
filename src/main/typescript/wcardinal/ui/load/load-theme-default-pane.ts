/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteContent } from "../theme/default/d-theme-default-content";
import { DThemeWhitePane } from "../theme/default/d-theme-default-pane";
import { loadThemeWhiteScrollBar } from "./load-theme-default-scroll-bar";

export const loadThemeWhitePane = () => {
	DThemeWhite.set( "DPane", DThemeWhitePane );
	DThemeWhite.set( "DContent", DThemeWhiteContent );
	loadThemeWhiteScrollBar();
};
