/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemSpace, DMenuItemSpaceOptions, DThemeMenuItemSpace } from "./d-menu-item-space";

export class DMenuSidedItemSpace<
	THEME extends DThemeMenuItemSpace = DThemeMenuItemSpace,
	OPTIONS extends DMenuItemSpaceOptions<THEME> = DMenuItemSpaceOptions<THEME>
> extends DMenuItemSpace<THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuSidedItemSpace";
	}
}
