/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeWhiteMenuItemSeparator } from "./d-theme-default-menu-item-separator";

export class DThemeWhiteMenuItemExpandableItemSeparator extends DThemeWhiteMenuItemSeparator {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}
