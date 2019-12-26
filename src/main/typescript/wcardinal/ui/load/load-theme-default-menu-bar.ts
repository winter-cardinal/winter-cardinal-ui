/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteMenuBar } from "../theme/default/d-theme-default-menu-bar";
import { DThemeWhiteMenuBarItem } from "../theme/default/d-theme-default-menu-bar-item";
import { loadThemeWhiteMenu } from "./load-theme-default-menu";

export const loadThemeWhiteMenuBar = () => {
	DThemeWhite.set( "DMenuBarItem", DThemeWhiteMenuBarItem );
	DThemeWhite.set( "DMenuBar", DThemeWhiteMenuBar );
	loadThemeWhiteMenu();
};
