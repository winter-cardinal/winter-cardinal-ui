/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItemMenu, DMenuItemMenuOptions, DThemeMenuItemMenu } from "./d-menu-item-menu";

export class DMenuItemExpandableItemMenu<
	VALUE = unknown,
	THEME extends DThemeMenuItemMenu = DThemeMenuItemMenu,
	OPTIONS extends DMenuItemMenuOptions<VALUE, THEME> = DMenuItemMenuOptions<VALUE, THEME>
> extends DMenuItemMenu<VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DMenuItemExpandableItemMenu";
	}
}
