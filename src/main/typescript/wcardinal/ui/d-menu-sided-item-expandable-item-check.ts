/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemCheckOptions, DThemeMenuItemCheck } from "./d-menu-item-check";
import { DMenuItemExpandableItemCheck } from "./d-menu-item-expandable-item-check";

export class DMenuSidedItemExpandableItemCheck<
	VALUE = unknown,
	THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck,
	OPTIONS extends DMenuItemCheckOptions<VALUE, THEME> = DMenuItemCheckOptions<VALUE, THEME>
> extends DMenuItemExpandableItemCheck<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuSidedItemExpandableItemCheck";
	}
}
