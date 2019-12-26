/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteExpandable } from "../theme/white/d-theme-white-expandable";
import { DThemeWhiteExpandableHeader } from "../theme/white/d-theme-white-expandable-header";

export const loadThemeWhiteExpandable = () => {
	DThemeWhite.set( "DExpandableHeader", DThemeWhiteExpandableHeader );
	DThemeWhite.set( "DExpandable", DThemeWhiteExpandable );
};
