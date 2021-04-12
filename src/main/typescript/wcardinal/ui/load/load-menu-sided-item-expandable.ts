/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheck } from "../d-menu-item-check";
import { DMenuItemExpandable } from "../d-menu-item-expandable";
import { DMenuItemLink } from "../d-menu-item-link";
import { DMenuItemMenu } from "../d-menu-item-menu";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparator } from "../d-menu-item-separator";
import { DMenuItemSpace } from "../d-menu-item-space";
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
		if (DMenuItemExpandable.isCompatible(options)) {
			return new DMenuSidedItemExpandable(options);
		}
		return null;
	});

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemCheck.isCompatible(options)) {
				return new DMenuSidedItemExpandableItemCheck(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemLink.isCompatible(options)) {
				return new DMenuSidedItemExpandableItemLink(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>, sticky: boolean): DisplayObject | null => {
			if (DMenuItemMenu.isCompatible(options)) {
				return new DMenuSidedItemExpandableItemMenu(
					DMenuItemMenu.toSubMenuOptions(options, sticky)
				);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSeparator.isCompatible(options)) {
				return new DMenuSidedItemExpandableItemSeparator(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSpace.isCompatible(options)) {
				return new DMenuSidedItemExpandableItemSpace(options);
			}
			return null;
		}
	);

	DMenuSidedItemExpandables.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuSidedItemExpandableItemText(options);
	});
};
