/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteTree } from "../d-theme-white-tree";
import { DThemeWhiteTreeItem } from "../d-theme-white-tree-item";
import { DThemeWhiteTreeItemText } from "../d-theme-white-tree-item-text";
import { DThemeWhiteTreeItemToggleIcon } from  "../d-theme-white-tree-item-toggle-icon";

export const loadThemeWhiteTree = () => {
	DThemeWhite.set( "DTreeItem", DThemeWhiteTreeItem );
	DThemeWhite.set( "DTree", DThemeWhiteTree );
	DThemeWhite.set( "DTreeItemText", DThemeWhiteTreeItemText);
	DThemeWhite.set( "DTreeItemToggleIcon", DThemeWhiteTreeItemToggleIcon)
};
