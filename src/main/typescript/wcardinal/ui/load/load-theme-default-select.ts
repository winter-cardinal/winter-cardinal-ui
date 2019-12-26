/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultSelect } from "../theme/default/d-theme-default-select";
import { loadThemeDefaultDropdown } from "./load-theme-default-dropdown";

export const loadThemeDefaultSelect = () => {
	DThemeDefault.set( "DSelect", DThemeDefaultSelect );
	loadThemeDefaultDropdown();
};
