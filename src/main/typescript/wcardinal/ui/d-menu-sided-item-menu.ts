/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemSelection } from "./d-list-item";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu, DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";

export class DMenuSidedItemMenu<
	VALUE = unknown,
	THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu,
	OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>
> extends DMenuItemMenu<VALUE, THEME, OPTIONS> {
	protected initHover( options: OPTIONS ): void {
		// DO NOTHING
	}

	protected onMenuSelect( value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void {
		super.onMenuSelect( value, item, menu );
		const selection = super.getSelection();
		if( selection ) {
			selection.add( item );
		}
	}

	protected onOpen( menu: DMenu<VALUE> ): void {
		menu.open( this, this );
	}

	protected getSelection(): DListItemSelection | null {
		return null;
	}

	protected getType(): string {
		return "DMenuSidedItemMenu";
	}
}
