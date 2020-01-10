/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkSelect } from "../theme/dark/d-theme-dark-select";
import { loadThemeDarkDropdown } from "./load-theme-dark-dropdown";

export const loadThemeDarkSelect = () => {
	DThemeDark.set( "DSelect", DThemeDarkSelect );
	loadThemeDarkDropdown();
};
