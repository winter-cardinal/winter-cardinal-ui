/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkMenuBar } from "../d-theme-dark-menu-bar";
import { DThemeDarkMenuBarItem } from "../d-theme-dark-menu-bar-item";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";

export const loadThemeDarkMenuBar = () => {
	DThemeDark.set( "DMenuBarItem", DThemeDarkMenuBarItem );
	DThemeDark.set( "DMenuBar", DThemeDarkMenuBar );
	loadThemeDarkMenu();
};
