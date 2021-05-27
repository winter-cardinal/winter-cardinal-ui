/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheckIsCompatible } from "../d-menu-item-check-is-compatible";
import { DMenuItemLinkIsCompatible } from "../d-menu-item-link-is-compatible";
import { DMenuItemMenuIsCompatible } from "../d-menu-item-menu-is-compatible";
import { DMenuItemMenuToSubMenuOptions } from "../d-menu-item-menu-to-sub-menu-options";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparatorIsCompatible } from "../d-menu-item-separator";
import { DMenuItemSpaceIsCompatible } from "../d-menu-item-space-is-compatible";
import { DMenuSidedItemCheck } from "../d-menu-sided-item-check";
import { DMenuSidedItemLink } from "../d-menu-sided-item-link";
import { DMenuSidedItemMenu } from "../d-menu-sided-item-menu";
import { DMenuSidedItemSeparator } from "../d-menu-sided-item-separator";
import { DMenuSidedItemSpace } from "../d-menu-sided-item-space";
import { DMenuSidedItemText } from "../d-menu-sided-item-text";
import { DMenuSideds } from "../d-menu-sideds";

export const loadMenuSidedItem = (): void => {
	DMenuSideds.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuSidedItemText(options);
	});

	DMenuSideds.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSpaceIsCompatible(options)) {
			return new DMenuSidedItemSpace(options);
		}
		return null;
	});

	DMenuSideds.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemSeparatorIsCompatible(options)) {
			return new DMenuSidedItemSeparator(options);
		}
		return null;
	});

	DMenuSideds.addItemCreator(
		(options: DMenuItemOptionsUnion<any>, sticky: boolean): DisplayObject | null => {
			if (DMenuItemMenuIsCompatible(options)) {
				return new DMenuSidedItemMenu(DMenuItemMenuToSubMenuOptions(options, sticky));
			}
			return null;
		}
	);

	DMenuSideds.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemLinkIsCompatible(options)) {
			return new DMenuSidedItemLink(options);
		}
		return null;
	});

	DMenuSideds.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemCheckIsCompatible(options)) {
			return new DMenuSidedItemCheck(options);
		}
		return null;
	});
};
