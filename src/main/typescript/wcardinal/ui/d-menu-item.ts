/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItem, DListItemOptions, DThemeListItem } from "./d-list-item";
import { Closeable, DMenuContext } from "./d-menu-context";

export interface DMenuItemOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItem = DThemeMenuItem
> extends DListItemOptions<VALUE, THEME> {

}

export interface DThemeMenuItem extends DThemeListItem {

}

export class DMenuItem<
	VALUE = unknown,
	THEME extends DThemeMenuItem = DThemeMenuItem,
	OPTIONS extends DMenuItemOptions<VALUE, THEME> = DMenuItemOptions<VALUE, THEME>
> extends DListItem<VALUE, THEME, OPTIONS> {
	getContext(): DMenuContext | null {
		let parent = this.parent as any;
		while( parent ) {
			if( parent.getContext ) {
				return parent.getContext();
			}
			parent = parent.parent;
		}
		return null;
	}

	getCloseable(): Closeable | null {
		let parent = this.parent as any;
		while( parent ) {
			if( parent.getCloseable ) {
				return parent.getCloseable();
			}
			parent = parent.parent;
		}
		return null;
	}

	protected getType(): string {
		return "DMenuItem";
	}
}
