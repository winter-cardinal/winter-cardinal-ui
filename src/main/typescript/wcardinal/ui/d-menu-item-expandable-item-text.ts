/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemText, DMenuItemTextOptions, DThemeMenuItemText } from "./d-menu-item-text";

export class DMenuItemExpandableItemText<
	VALUE = unknown,
	THEME extends DThemeMenuItemText = DThemeMenuItemText,
	OPTIONS extends DMenuItemTextOptions<VALUE, THEME> = DMenuItemTextOptions<VALUE, THEME>
> extends DMenuItemText<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemExpandableItemText";
	}
}
