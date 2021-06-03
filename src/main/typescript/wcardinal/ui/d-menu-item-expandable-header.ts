/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemBase, DMenuItemBaseOptions, DThemeMenuItemBase } from "./d-menu-item-base";
import { DMenuItemBaseSelection } from "./d-menu-item-base-selection";

export interface DMenuItemExpandableHeaderOptions<
	VALUE = unknown,
	THEME extends DThemeMenuItemExpandableHeader = DThemeMenuItemExpandableHeader
> extends DMenuItemBaseOptions<VALUE, THEME> {}

export interface DThemeMenuItemExpandableHeader extends DThemeMenuItemBase {}

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
