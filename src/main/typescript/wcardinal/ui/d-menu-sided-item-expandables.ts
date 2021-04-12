/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, DisplayObject } from "pixi.js";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";
import { DMenuSideds } from "./d-menu-sideds";
import { DMenuItemCreator, DMenus } from "./d-menus";

export class DMenuSidedItemExpandables {
	protected static CREATORS: DMenuItemCreator[] = [];
	protected static CREATOR_DEFAULT: DMenuItemCreator | null = null;

	static addItemCreator(creator: DMenuItemCreator): void {
		this.CREATORS.push(creator);
	}

	static setItemCreatorDefault(creator: DMenuItemCreator): void {
		this.CREATOR_DEFAULT = creator;
	}

	static newItem<VALUE>(
		options: DMenuItemOptionsUnion<VALUE>,
		sticky: boolean
	): DisplayObject | null {
		return (
			DMenus.newItemOf(this.CREATORS, this.CREATOR_DEFAULT, options, sticky) ||
			DMenuSideds.newItem(options, sticky)
		);
	}

	static newItems<VALUE>(
		parent: Container,
		items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>,
		sticky: boolean
	): void {
		DMenus.newItemsOf(this, parent, items, sticky);
	}
}
