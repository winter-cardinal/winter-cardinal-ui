/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DMenuItemCheckIsCompatible } from "../d-menu-item-check-is-compatible";
import { DMenuItemExpandable } from "../d-menu-item-expandable";
import { DMenuItemExpandableIsCompatible } from "../d-menu-item-expandable-is-compatible";
import { DMenuItemExpandableItemCheck } from "../d-menu-item-expandable-item-check";
import { DMenuItemExpandableItemLink } from "../d-menu-item-expandable-item-link";
import { DMenuItemExpandableItemSeparator } from "../d-menu-item-expandable-item-separator";
import { DMenuItemExpandableItemSpace } from "../d-menu-item-expandable-item-space";
import { DMenuItemExpandableItemText } from "../d-menu-item-expandable-item-text";
import { DMenuItemExpandables } from "../d-menu-item-expandables";
import { DMenuItemLinkIsCompatible } from "../d-menu-item-link-is-compatible";
import { DMenuItemOptionsUnion } from "../d-menu-item-options-union";
import { DMenuItemSeparatorIsCompatible } from "../d-menu-item-separator";
import { DMenuItemSpaceIsCompatible } from "../d-menu-item-space-is-compatible";
import { DMenus } from "../d-menus";

export const loadMenuItemExpandable = (): void => {
	DMenus.addItemCreator((options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
		if (DMenuItemExpandableIsCompatible(options)) {
			return new DMenuItemExpandable(options);
		}
		return null;
	});

	DMenuItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemCheckIsCompatible(options)) {
				return new DMenuItemExpandableItemCheck(options);
			}
			return null;
		}
	);

	DMenuItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemLinkIsCompatible(options)) {
				return new DMenuItemExpandableItemLink(options);
			}
			return null;
		}
	);

	DMenuItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSeparatorIsCompatible(options)) {
				return new DMenuItemExpandableItemSeparator(options);
			}
			return null;
		}
	);

	DMenuItemExpandables.addItemCreator(
		(options: DMenuItemOptionsUnion<any>): DisplayObject | null => {
			if (DMenuItemSpaceIsCompatible(options)) {
				return new DMenuItemExpandableItemSpace(options);
			}
			return null;
		}
	);

	DMenuItemExpandables.setItemCreatorDefault((options: any): DisplayObject | null => {
		return new DMenuItemExpandableItemText(options);
	});
};
