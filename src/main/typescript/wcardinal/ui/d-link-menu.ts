/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject } from "pixi.js";
import { DBase } from "./d-base";
import { DLinkMenuItemId } from "./d-link-menu-item-id";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenus } from "./d-menus";

export type DLinkMenuOptions = DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;

export interface DLinkMenuParent {
	copy(): void;
	open( inNewWindow: boolean ): void;
}

export class DLinkMenu {
	protected _parent: DLinkMenuParent;
	protected _menu?: DMenu<DLinkMenuItemId>;
	protected _options: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId>;
	protected _isEnabled: boolean;

	constructor( parent: DLinkMenuParent, options: DLinkMenuOptions ) {
		this._parent = parent;
		this._options = options;
		this._isEnabled = true;
	}

	get enable(): boolean {
		return this._isEnabled;
	}

	set enable( enable: boolean ) {
		this._isEnabled = enable;
	}

	open( target: DBase ): void {
		this.get().open( target );
	}

	get(): DMenu<DLinkMenuItemId> {
		let result = this._menu;
		if( result == null ) {
			result = this.toMenu( this._options );
			this._menu = result;
			result.on( "select", (
				value: DLinkMenuItemId,
				item: DMenuItem<DLinkMenuItemId>,
				menu: DMenu<DLinkMenuItemId>
			): void => {
				this.onSelect( value, item, menu );
			});
		}
		return result;
	}

	protected toMenu( options: DMenuOptions<DLinkMenuItemId> | DMenu<DLinkMenuItemId> ): DMenu<DLinkMenuItemId> {
		if( options instanceof DisplayObject ) {
			return options;
		}
		return this.newMenu( options );
	}

	protected newMenu( options: DMenuOptions<DLinkMenuItemId> ): DMenu<DLinkMenuItemId> {
		return DMenus.newMenu( options );
	}

	protected onSelect(
		value: DLinkMenuItemId,
		item: DMenuItem<DLinkMenuItemId>,
		menu: DMenu<DLinkMenuItemId>
	): void {
		const parent = this._parent;
		switch( value ) {
		case DLinkMenuItemId.OPEN_LINK_IN_NEW_WINDOW:
			parent.open( true );
			break;
		case DLinkMenuItemId.COPY_LINK_ADDRESS:
			parent.copy();
			break;
		}
	}
}
