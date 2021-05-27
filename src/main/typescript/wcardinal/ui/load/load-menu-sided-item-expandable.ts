/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheckIsCompatible } from "../d-menu-item-check-is-compatible";
import { DMenuItemExpandableIsCompatible } from "../d-menu-item-expandable-is-compatible";
import { DMenuItemLinkIsCompatible } from "../d-menu-item-link-is-compatible";
import { DMenuItemMenuIsCompatible } from "../d-menu-item-menu-is-compatible";
import { DMenuItemMenuToSubMenuOptions } from "../d-menu-item-menu-to-sub-menu-options";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparatorIsCompatible } from "../d-menu-item-separator";
import { DMenuItemSpaceIsCompatible } from "../d-menu-item-space-is-compatible";
import { DMenuSidedItemExpandable } from "../d-menu-sided-item-expandable";
import { DMenuSidedItemExpandableItemCheck } from "../d-menu-sided-item-expandable-item-check";
import { DMenuSidedItemExpandableItemLink } from "../d-menu-sided-item-expandable-item-link";
import { DMenuSidedItemExpandableItemMenu } from "../d-menu-sided-item-expandable-item-menu";
import { DMenuSidedItemExpandableItemSeparator } from "../d-menu-sided-item-expandable-item-separator";
import { DMenuSidedItemExpandableItemSpace } from "../d-menu-sided-item-expandable-item-space";
import { DMenuSidedItemExpandableItemText } from "../d-menu-sided-item-expandable-item-text";
import { DMenuSidedItemExpandables } from "../d-menu-sided-item-expandables";
import { DMenuSideds } from "../d-menu-sideds";

export const loadMenuSidedItemExpandable = (): void => {
	DMenuSideds.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemExpandableIsCompatible(options)) {
			return new DMenuSidedItemExpandable(options);
		}
		return null;
	});

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemCheckIsCompatible(options)) {
				return new DMenuSidedItemExpandableItemCheck(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemLinkIsCompatible(options)) {
				return new DMenuSidedItemExpandableItemLink(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>, sticky: boolean): DisplayObject | null => {
			if (DMenuItemMenuIsCompatible(options)) {
				return new DMenuSidedItemExpandableItemMenu(
					DMenuItemMenuToSubMenuOptions(options, sticky)
				);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSeparatorIsCompatible(options)) {
				return new DMenuSidedItemExpandableItemSeparator(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSpaceIsCompatible(options)) {
				return new DMenuSidedItemExpandableItemSpace(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuSidedItemExpandableItemText(options);
	});
};
