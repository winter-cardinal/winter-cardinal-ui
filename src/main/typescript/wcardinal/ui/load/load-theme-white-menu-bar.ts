/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteMenuBar } from "../theme/white/d-theme-white-menu-bar";
import { DThemeWhiteMenuBarItem } from "../theme/white/d-theme-white-menu-bar-item";
import { loadThemeWhiteMenu } from "./load-theme-white-menu";

export const loadThemeWhiteMenuBar = () => {
	DThemeWhite.set( "DMenuBarItem", DThemeWhiteMenuBarItem );
	DThemeWhite.set( "DMenuBar", DThemeWhiteMenuBar );
	loadThemeWhiteMenu();
};
