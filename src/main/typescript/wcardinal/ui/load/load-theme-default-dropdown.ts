/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultDropdown } from "../theme/default/d-theme-default-dropdown";
import { loadThemeDefaultMenu } from "./load-theme-default-menu";

export const loadThemeDefaultDropdown = () => {
	DThemeDefault.set( "DDropdown", DThemeDefaultDropdown );
	loadThemeDefaultMenu();
};
