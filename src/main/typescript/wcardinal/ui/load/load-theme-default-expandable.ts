/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteExpandable } from "../theme/default/d-theme-default-expandable";
import { DThemeWhiteExpandableHeader } from "../theme/default/d-theme-default-expandable-header";

export const loadThemeWhiteExpandable = () => {
	DThemeWhite.set( "DExpandableHeader", DThemeWhiteExpandableHeader );
	DThemeWhite.set( "DExpandable", DThemeWhiteExpandable );
};
