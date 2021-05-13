/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDark } from "../d-theme-dark";
import { DThemeDarkTree } from "../d-theme-dark-tree";
import { DThemeDarkTreeItemButton } from "../d-theme-dark-tree-item-button";
import { DThemeDarkTreeItemNonEditable } from "../d-theme-dark-tree-item-non-editable";
import { DThemeDarkTreeItemText } from "../d-theme-dark-tree-item-text";

export const loadThemeDarkTree = (): void => {
	DThemeDark.set("DTree", DThemeDarkTree);
	DThemeDark.set("DTreeItemText", DThemeDarkTreeItemText);
	DThemeDark.set("DTreeItemButton", DThemeDarkTreeItemButton);
	DThemeDark.set("DTreeItemNonEditable", DThemeDarkTreeItemNonEditable);
};
