/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteExpandable } from "../d-theme-white-expandable";
import { DThemeWhiteExpandableHeader } from "../d-theme-white-expandable-header";

export const loadThemeWhiteExpandable = () => {
	DThemeWhite.set( "DExpandableHeader", DThemeWhiteExpandableHeader );
	DThemeWhite.set( "DExpandable", DThemeWhiteExpandable );
};
