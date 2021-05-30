/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemBaseSelection } from "./d-menu-item-base-selection";
import { DMenuItemLink, DMenuItemLinkOptions, DThemeMenuItemLink } from "./d-menu-item-link";

export class DMenuSidedItemLink<
	VALUE = unknown,
	THEME extends DThemeMenuItemLink = DThemeMenuItemLink,
	OPTIONS extends DMenuItemLinkOptions<VALUE, THEME> = DMenuItemLinkOptions<VALUE, THEME>
> extends DMenuItemLink<VALUE, THEME, OPTIONS> {
	protected getSelection(): DMenuItemBaseSelection | null {
		return null;
	}

	protected getType(): string {
		return "DMenuSidedItemLink";
	}
}
