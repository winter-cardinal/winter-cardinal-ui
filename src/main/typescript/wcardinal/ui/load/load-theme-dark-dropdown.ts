/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkDropdown } from "../theme/dark/d-theme-dark-dropdown";
import { loadThemeDarkMenu } from "./load-theme-dark-menu";

export const loadThemeDarkDropdown = () => {
	DThemeDark.set( "DDropdown", DThemeDarkDropdown );
	loadThemeDarkMenu();
};
