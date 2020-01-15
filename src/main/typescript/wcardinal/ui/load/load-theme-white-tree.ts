/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../theme/white/d-theme-white";
import { DThemeWhiteTree } from "../theme/white/d-theme-white-tree";
import { DThemeWhiteTreeItem } from "../theme/white/d-theme-white-tree-item";

export const loadThemeWhiteTree = () => {
	DThemeWhite.set( "DTreeItem", DThemeWhiteTreeItem );
	DThemeWhite.set( "DTree", DThemeWhiteTree );
};
