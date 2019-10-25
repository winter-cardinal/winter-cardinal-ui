/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemExpandableItemText } from "./d-menu-item-expandable-item-text";
import { DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";

export class DMenuSidedItemExpandableItemText<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText,
	OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>
> extends DMenuItemExpandableItemText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuSidedItemExpandableItemText";
	}
}
