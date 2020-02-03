/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkTree } from "../d-theme-dark-tree";
import { DThemeDarkTreeItem } from "../d-theme-dark-tree-item";

export const loadThemeDarkTree = () => {
	DThemeDark.set( "DTreeItem", DThemeDarkTreeItem );
	DThemeDark.set( "DTree", DThemeDarkTree );
};
