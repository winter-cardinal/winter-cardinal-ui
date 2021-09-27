/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTreeItemButton } from "../../d-tree-item-button";
import { DThemeDarkTreeItemText } from "./d-theme-dark-tree-item-text";

export class DThemeDarkTreeItemButton
	extends DThemeDarkTreeItemText
	implements DThemeTreeItemButton
{
	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}
