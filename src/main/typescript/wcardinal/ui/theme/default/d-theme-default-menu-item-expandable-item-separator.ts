/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeDefaultMenuItemSeparator } from "./d-theme-default-menu-item-separator";

export class DThemeDefaultMenuItemExpandableItemSeparator extends DThemeDefaultMenuItemSeparator {
	getPaddingLeft(): number {
		return super.getPaddingLeft() + 16;
	}
}
