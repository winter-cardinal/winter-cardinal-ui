/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../theme/dark/d-theme-dark";
import { DThemeDarkList } from "../theme/dark/d-theme-dark-list";
import { DThemeDarkListItem } from "../theme/dark/d-theme-dark-list-item";
import { DThemeDarkListItemSeparator } from "../theme/dark/d-theme-dark-list-item-separator";

export const loadThemeDarkList = () => {
	DThemeDark.set( "DListItemSeparator", DThemeDarkListItemSeparator );
	DThemeDark.set( "DListItem", DThemeDarkListItem );
	DThemeDark.set( "DList", DThemeDarkList );
};
