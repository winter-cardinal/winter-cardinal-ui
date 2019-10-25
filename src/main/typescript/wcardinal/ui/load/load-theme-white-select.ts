/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteSelect } from "../theme/white/d-theme-white-select";
import { loadThemeWhiteDropdown } from "./load-theme-white-dropdown";

export const loadThemeWhiteSelect = () => {
	DThemeWhite.set( "DSelect", DThemeWhiteSelect );
	loadThemeWhiteDropdown();
};
