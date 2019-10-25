/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DMenuItemExpandable, DMenuItemExpandableOptions, DThemeMenuItemExpandable } from "./d-menu-item-expandable";
import { DMenuSidedItemExpandables } from "./d-menu-sided-item-expandables";

export class DMenuSidedItemExpandable<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandable = DThemeMenuItemExpandable,
	OPTIONS extends DMenuItemExpandableOptions<VALUE, THEME> = DMenuItemExpandableOptions<VALUE, THEME>
> extends DMenuItemExpandable<VALUE, THEME, OPTIONS> {
	protected newItems( body: Container, sticky: boolean, theme: THEME, options: OPTIONS | undefined ): void {
		if( options != null && options.items != null ) {
			DMenuSidedItemExpandables.newItems( body, options.items, sticky );
		}
	}

	protected getType(): string {
		return "DMenuSidedItemExpandable";
	}
}
