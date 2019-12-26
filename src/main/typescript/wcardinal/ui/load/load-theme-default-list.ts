/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefault } from "../theme/default/d-theme-default";
import { DThemeDefaultList } from "../theme/default/d-theme-default-list";
import { DThemeDefaultListItem } from "../theme/default/d-theme-default-list-item";
import { DThemeDefaultListItemSeparator } from "../theme/default/d-theme-default-list-item-separator";

export const loadThemeDefaultList = () => {
	DThemeDefault.set( "DListItemSeparator", DThemeDefaultListItemSeparator );
	DThemeDefault.set( "DListItem", DThemeDefaultListItem );
	DThemeDefault.set( "DList", DThemeDefaultList );
};
