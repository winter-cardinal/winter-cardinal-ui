/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemExpandableItemSeparator } from "./d-menu-item-expandable-item-separator";
import { DMenuItemSeparatorOptions, DThemeMenuItemSeparator } from "./d-menu-item-separator";

export class DMenuSidedItemExpandableItemSeparator<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator,
	OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<
		VALUE,
		THEME
	>
> extends DMenuItemExpandableItemSeparator<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuSidedItemSeparator";
	}
}
