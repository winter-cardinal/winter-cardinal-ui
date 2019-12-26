/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/default/d-theme-default";
import { DThemeWhiteList } from "../theme/default/d-theme-default-list";
import { DThemeWhiteListItem } from "../theme/default/d-theme-default-list-item";
import { DThemeWhiteListItemSeparator } from "../theme/default/d-theme-default-list-item-separator";

export const loadThemeWhiteList = () => {
	DThemeWhite.set( "DListItemSeparator", DThemeWhiteListItemSeparator );
	DThemeWhite.set( "DListItem", DThemeWhiteListItem );
	DThemeWhite.set( "DList", DThemeWhiteList );
};
