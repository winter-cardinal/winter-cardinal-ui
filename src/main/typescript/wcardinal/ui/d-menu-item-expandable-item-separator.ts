/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemSeparator, DMenuItemSeparatorOptions, DThemeMenuItemSeparator } from "./d-menu-item-separator";

export class DMenuItemExpandableItemSeparator<
	VALUE = unknown,
	THEME extends DThemeMenuItemSeparator = DThemeMenuItemSeparator,
	OPTIONS extends DMenuItemSeparatorOptions<VALUE, THEME> = DMenuItemSeparatorOptions<VALUE, THEME>
> extends DMenuItemSeparator<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemExpandableItemSeparator";
	}
}
