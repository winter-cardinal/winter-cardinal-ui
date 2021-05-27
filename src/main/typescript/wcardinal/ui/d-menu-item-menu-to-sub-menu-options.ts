/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuAlign } from "./d-menu-align";
import { DMenuItemMenuOptions } from "./d-menu-item-menu";

export const DMenuItemMenuToSubMenuOptions = <VALUE>(
	options: DMenuItemMenuOptions<VALUE>,
	sticky: boolean
): DMenuItemMenuOptions<VALUE> => {
	const menu = options.menu;
	if (!(menu instanceof DisplayObject)) {
		if (menu.sticky == null) {
			menu.sticky = sticky;
		}
		if (menu.align == null) {
			menu.align = DMenuAlign.RIGHT;
		}
	}
	return options;
};
