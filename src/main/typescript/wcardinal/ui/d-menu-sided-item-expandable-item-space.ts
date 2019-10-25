/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemExpandableItemSpace } from "./d-menu-item-expandable-item-space";
import { DMenuItemSpaceOptions, DThemeMenuItemSpace } from "./d-menu-item-space";

export class DMenuSidedItemExpandableItemSpace<
	THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace,
	OPTIONS extends DMenuItemSpaceOptions<THEME> = DMenuItemSpaceOptions<THEME>
> extends DMenuItemExpandableItemSpace<THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuSidedItemExpandableItemSpace";
	}
}
