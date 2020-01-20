/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDarkMenuItemSeparator } from "./d-theme-dark-menu-item-separator";

export class DThemeDarkMenuItemExpandableItemSeparator extends DThemeDarkMenuItemSeparator {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}
