/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteSelect } from "../d-theme-white-select";
import { DThemeWhiteSelectBase } from "../d-theme-white-select-base";
import { DThemeWhiteSelectMultiple } from "../d-theme-white-select-multiple";

export const loadThemeWhiteSelect = () => {
	DThemeWhite.set( "DSelectBase", DThemeWhiteSelectBase );
	DThemeWhite.set( "DSelectMultiple", DThemeWhiteSelectMultiple );
	DThemeWhite.set( "DSelect", DThemeWhiteSelect );
};
