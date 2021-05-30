/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DListItemOptions, DThemeListItem } from "./d-list-item";
import { DMenuItemBase } from "./d-menu-item-base";
import { DMenuItemBaseSelection } from "./d-menu-item-base-selection";

export interface DMenuItemExpandableHeaderOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader
> extends DListItemOptions<VALUE, THEME> {}

export interface DThemeMenuItemExpandableHeader extends DThemeListItem {}

export class DMenuItemExpandableHeader<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader,
	OPTIONS extends DMenuItemExpandableHeaderOptions<
		VALUE,
		THEME
	> = DMenuItemExpandableHeaderOptions<VALUE, THEME>
> extends DMenuItemBase<VALUE, THEME, OPTIONS> {
	protected getSelection(): DMenuItemBaseSelection | null {
		return null;
	}

	protected getType(): string {
		return "DMenuItemExpandableHeader";
	}
}
