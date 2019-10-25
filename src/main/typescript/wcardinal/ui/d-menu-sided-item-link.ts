/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemSelection } from "./d-list-item";
import { DMenuItemLink, DMenuItemLinkOptions, DThemeMenuItemLink } from "./d-menu-item-link";

export class DMenuSidedItemLink<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink,
	OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>
> extends DMenuItemLink<VALUE, THEME, OPTIONS> {
	protected getSelection(): DListItemSelection | null {
		return null;
	}

	protected getType(): string {
		return "DMenuSidedItemLink";
	}
}
