/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSelect } from "../d-theme-white-select";
import { loadThemeWhiteDropdown } from "./load-theme-white-dropdown";

export const loadThemeWhiteSelect = () => {
	DThemeWhite.set( "DSelect", DThemeWhiteSelect );
	loadThemeWhiteDropdown();
};
