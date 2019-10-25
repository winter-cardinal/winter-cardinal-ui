/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemCheck, DMenuItemCheckOptions, DThemeMenuItemCheck } from "./d-menu-item-check";

export class DMenuItemExpandableItemCheck<
	VALUE = unknown,
	THEME extends DThemeMenuItemCheck = DThemeMenuItemCheck,
	OPTIONS extends DMenuItemCheckOptions<VALUE, THEME> = DMenuItemCheckOptions<VALUE, THEME>
> extends DMenuItemCheck<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemExpandableItemCheck";
	}
}
