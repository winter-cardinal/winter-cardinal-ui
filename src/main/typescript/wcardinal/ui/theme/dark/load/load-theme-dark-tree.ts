/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkTree } from "../d-theme-dark-tree";
import { DThemeDarkTreeItem } from "../d-theme-dark-tree-item";
import { DThemeDarkTreeItemTextAndImage } from "../d-theme-dark-tree-item-text-and-image";
import { DThemeDarkTreeItemToggleIcon } from "../d-theme-dark-tree-item-toggle-icon";

export const loadThemeDarkTree = () => {
	DThemeDark.set( "DTree", DThemeDarkTree );
	DThemeDark.set( "DTreeItem", DThemeDarkTreeItem );
	DThemeDark.set( "DTreeItemToggleIcon", DThemeDarkTreeItemToggleIcon);
	DThemeDark.set( "DTreeItemTextAndImage", DThemeDarkTreeItemTextAndImage);
};
