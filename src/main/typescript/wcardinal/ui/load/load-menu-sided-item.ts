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
import { DMenuSidedItemCheck } from "../d-menu-sided-item-check";
import { DMenuSidedItemLink } from "../d-menu-sided-item-link";
import { DMenuSidedItemMenu } from "../d-menu-sided-item-menu";
import { DMenuSidedItemSeparator } from "../d-menu-sided-item-separator";
import { DMenuSidedItemSpace } from "../d-menu-sided-item-space";
import { DMenuSidedItemText } from "../d-menu-sided-item-text";
import { DMenuSideds } from "../d-menu-sideds";

export const loadMenuSidedItem = (): void => {
	DMenuSideds.setItemCreatorDefault(( options: any ): DisplayObject | null => {
		return new DMenuSidedItemText( options );
	});

	DMenuSideds.addItemCreator(( options: DMenuItemOptionsUnion<any> ): DisplayObject | null => {
		if( DMenuItemSpace.isCompatible( options ) ) {
			return new DMenuSidedItemSpace( options );
		}
		return null;
	});

	DMenuSideds.addItemCreator(( options: DMenuItemOptionsUnion<any> ): DisplayObject | null => {
		if( DMenuItemSeparator.isCompatible( options ) ) {
			return new DMenuSidedItemSeparator( options );
		}
		return null;
	});

	DMenuSideds.addItemCreator(( options: DMenuItemOptionsUnion<any>, sticky: boolean ): DisplayObject | null => {
		if( DMenuItemMenu.isCompatible( options ) ) {
			return new DMenuSidedItemMenu( DMenuItemMenu.toSubMenuOptions( options, sticky ) );
		}
		return null;
	});

	DMenuSideds.addItemCreator(( options: DMenuItemOptionsUnion<any> ): DisplayObject | null => {
		if( DMenuItemLink.isCompatible( options ) ) {
			return new DMenuSidedItemLink( options );
		}
		return null;
	});

	DMenuSideds.addItemCreator(( options: DMenuItemOptionsUnion<any> ): DisplayObject | null => {
		if( DMenuItemCheck.isCompatible( options ) ) {
			return new DMenuSidedItemCheck( options );
		}
		return null;
	});
};
