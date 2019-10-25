/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenu } from "./d-menu";
import { DMenuItemExpandableItemMenu } from "./d-menu-item-expandable-item-menu";
import { DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";

export class DMenuSidedItemExpandableItemMenu<
	VALUE = unknown,
	THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu,
	OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>
> extends DMenuItemExpandableItemMenu<VALUE, THEME, OPTIONS> {
	protected onOpen( menu: DMenu<VALUE> ): void {
		menu.open( this, this );
	}

	protected getType(): string {
		return "DMenuSidedItemExpandableItemMenu";
	}
}
