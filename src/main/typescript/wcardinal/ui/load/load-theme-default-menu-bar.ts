/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultMenuBar } from "../theme/default/d-theme-default-menu-bar";
import { DThemeDefaultMenuBarItem } from "../theme/default/d-theme-default-menu-bar-item";
import { loadThemeDefaultMenu } from "./load-theme-default-menu";

export const loadThemeDefaultMenuBar = () => {
	DThemeDefault.set( "DMenuBarItem", DThemeDefaultMenuBarItem );
	DThemeDefault.set( "DMenuBar", DThemeDefaultMenuBar );
	loadThemeDefaultMenu();
};
