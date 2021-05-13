/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhite } from "../d-theme-white";
import { DThemeWhiteTree } from "../d-theme-white-tree";
import { DThemeWhiteTreeItemButton } from "../d-theme-white-tree-item-button";
import { DThemeWhiteTreeItemNonEditable } from "../d-theme-white-tree-item-non-editable";
import { DThemeWhiteTreeItemText } from "../d-theme-white-tree-item-text";

export const loadThemeWhiteTree = (): void => {
	DThemeWhite.set("DTree", DThemeWhiteTree);
	DThemeWhite.set("DTreeItemText", DThemeWhiteTreeItemText);
	DThemeWhite.set("DTreeItemButton", DThemeWhiteTreeItemButton);
	DThemeWhite.set("DTreeItemNonEditable", DThemeWhiteTreeItemNonEditable);
};
