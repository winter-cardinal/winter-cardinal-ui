/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheck } from "../d-menu-item-check";
import { DMenuItemLink } from "../d-menu-item-link";
import { DMenuItemMenu } from "../d-menu-item-menu";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparator } from "../d-menu-item-separator";
import { DMenuItemSpace } from "../d-menu-item-space";
import { DMenuItemText } from "../d-menu-item-text";
import { DMenus } from "../d-menus";

export const loadMenuItem = (): void => {
	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemCheck.isCompatible(options)) {
			return new DMenuItemCheck(options);
		}
		return null;
	});

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemLink.isCompatible(options)) {
			return new DMenuItemLink(options);
		}
		return null;
	});

	DMenus.addItemCreator(
		(options: DMenuItemOptionsUnion<any>, sticky: boolean): DisplayObject | null => {
			if (DMenuItemMenu.isCompatible(options)) {
				return new DMenuItemMenu(DMenuItemMenu.toSubMenuOptions(options, sticky));
			}
			return null;
		}
	);

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSeparator.isCompatible(options)) {
			return new DMenuItemSeparator(options);
		}
		return null;
	});

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSpace.isCompatible(options)) {
			return new DMenuItemSpace(options);
		}
		return null;
	});

	DMenus.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuItemText(options);
	});
};
