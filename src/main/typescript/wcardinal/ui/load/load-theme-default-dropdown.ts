/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteDropdown } from "../theme/default/d-theme-default-dropdown";
import { loadThemeWhiteMenu } from "./load-theme-default-menu";

export const loadThemeWhiteDropdown = () => {
	DThemeWhite.set( "DDropdown", DThemeWhiteDropdown );
	loadThemeWhiteMenu();
};
