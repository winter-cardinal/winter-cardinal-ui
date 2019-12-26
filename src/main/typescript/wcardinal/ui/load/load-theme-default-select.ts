/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteSelect } from "../theme/default/d-theme-default-select";
import { loadThemeWhiteDropdown } from "./load-theme-default-dropdown";

export const loadThemeWhiteSelect = () => {
	DThemeWhite.set( "DSelect", DThemeWhiteSelect );
	loadThemeWhiteDropdown();
};
