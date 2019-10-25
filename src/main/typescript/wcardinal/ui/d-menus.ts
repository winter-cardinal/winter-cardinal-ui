/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container, DisplayObject } from "pixi.js";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItemOptionsUnion } from "./d-menu-item-options-union";

export type DMenuItemCreator = ( options: DMenuItemOptionsUnion<any>, sticky: boolean ) => DisplayObject | null;

export type DMenuMenuCreator = ( options?: DMenuOptions ) => DMenu<any>;

export class DMenus {
	protected static CREATORS: DMenuItemCreator[] = [];
	protected static CREATOR_DEFAULT: DMenuItemCreator | null = null;
	protected static MENU_CREATOR?: DMenuMenuCreator;

	static addItemCreator( creator: DMenuItemCreator ): void {
		this.CREATORS.push( creator );
	}

	static setItemCreatorDefault( creator: DMenuItemCreator ): void {
		this.CREATOR_DEFAULT = creator;
	}

	static setMenuCreator( creator: DMenuMenuCreator ): void {
		this.MENU_CREATOR = creator;
	}

	static newItemOf<VALUE>(
		creators: DMenuItemCreator[],
		creatorDefault: DMenuItemCreator | null,
		options: DMenuItemOptionsUnion<VALUE>,
		sticky: boolean
	): DisplayObject | null {
		for( let i = 0, imax = creators.length; i < imax; ++i ) {
			const created = creators[ i ]( options, sticky );
			if( created != null ) {
				return created;
			}
		}
		if( creatorDefault ) {
			return creatorDefault( options, sticky );
		}
		return null;
	}

	static newItem<VALUE>( options: DMenuItemOptionsUnion<VALUE>, sticky: boolean ): DisplayObject | null {
		return this.newItemOf( this.CREATORS, this.CREATOR_DEFAULT, options, sticky );
	}

	static newItemsOf<VALUE>(
		creator: { newItem( options: DMenuItemOptionsUnion<VALUE>, sticky: boolean ): DisplayObject | null },
		parent: Container,
		items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>,
		sticky: boolean
	): void {
		for( let i = 0, imax = items.length; i < imax; ++i ) {
			const item = items[ i ];
			if( item instanceof DisplayObject ) {
				parent.addChild( item );
			} else {
				const created = creator.newItem( item, sticky );
				if( created != null ) {
					parent.addChild( created );
				} else {
					throw new Error( `No matching menu item creator found: ${JSON.stringify( item )}` );
				}
			}
		}
	}

	static newItems<VALUE>(
		parent: Container,
		items: Array<DMenuItemOptionsUnion<VALUE> | DisplayObject>,
		sticky: boolean
	): void {
		this.newItemsOf( this, parent, items, sticky );
	}

	static newMenu<VALUE>( options?: DMenuOptions<VALUE> ): DMenu<VALUE> {
		if( this.MENU_CREATOR != null ) {
			return this.MENU_CREATOR( options );
		} else {
			throw new Error( "Missing DMenu creator." );
		}
	}
}
