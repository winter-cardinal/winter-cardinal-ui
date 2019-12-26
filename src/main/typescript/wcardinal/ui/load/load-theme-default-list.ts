/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteList } from "../theme/white/d-theme-white-list";
import { DThemeWhiteListItem } from "../theme/white/d-theme-white-list-item";
import { DThemeWhiteListItemSeparator } from "../theme/white/d-theme-white-list-item-separator";

export const loadThemeWhiteList = () => {
	DThemeWhite.set( "DListItemSeparator", DThemeWhiteListItemSeparator );
	DThemeWhite.set( "DListItem", DThemeWhiteListItem );
	DThemeWhite.set( "DList", DThemeWhiteList );
};
