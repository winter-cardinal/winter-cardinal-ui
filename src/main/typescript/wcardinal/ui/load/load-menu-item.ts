/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheck } from "../d-menu-item-check";
import { DMenuItemCheckIsCompatible } from "../d-menu-item-check-is-compatible";
import { DMenuItemLink } from "../d-menu-item-link";
import { DMenuItemLinkIsCompatible } from "../d-menu-item-link-is-compatible";
import { DMenuItemMenu } from "../d-menu-item-menu";
import { DMenuItemMenuIsCompatible } from "../d-menu-item-menu-is-compatible";
import { DMenuItemMenuToSubMenuOptions } from "../d-menu-item-menu-to-sub-menu-options";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparator, DMenuItemSeparatorIsCompatible } from "../d-menu-item-separator";
import { DMenuItemSpace } from "../d-menu-item-space";
import { DMenuItemSpaceIsCompatible } from "../d-menu-item-space-is-compatible";
import { DMenuItemText } from "../d-menu-item-text";
import { DMenus } from "../d-menus";

export const loadMenuItem = (): void => {
	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemCheckIsCompatible(options)) {
			return new DMenuItemCheck(options);
		}
		return null;
	});

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemLinkIsCompatible(options)) {
			return new DMenuItemLink(options);
		}
		return null;
	});

	DMenus.addItemCreator(
		(options: DMenuItemOptionsUnion<any>, sticky: boolean): DisplayObject | null => {
			if (DMenuItemMenuIsCompatible(options)) {
				return new DMenuItemMenu(DMenuItemMenuToSubMenuOptions(options, sticky));
			}
			return null;
		}
	);

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSeparatorIsCompatible(options)) {
			return new DMenuItemSeparator(options);
		}
		return null;
	});

	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSpaceIsCompatible(options)) {
			return new DMenuItemSpace(options);
		}
		return null;
	});

	DMenus.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuItemText(options);
	});
};
