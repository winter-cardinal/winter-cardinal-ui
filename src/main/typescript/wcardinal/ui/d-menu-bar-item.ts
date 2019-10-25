/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItem } from "./d-menu-item";

export interface DMenuBarItemOptions<
	VALUE = unknown,
	THEME extends DThemeMenuBarItem = DThemeMenuBarItem
> extends DButtonOptions<VALUE, THEME> {
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
}

export interface DThemeMenuBarItem extends DThemeButton {

}

export class DMenuBarItem<
	VALUE = unknown,
	THEME extends DThemeMenuBarItem = DThemeMenuBarItem,
	OPTIONS extends DMenuBarItemOptions<VALUE, THEME> = DMenuBarItemOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _menu!: DMenu<VALUE>;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._menu = this.toMenu( this.theme, options );
		this._menu.on( "select", ( value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void => {
			this.onSelect( value, item, menu );
		});
	}

	protected toMenu( theme: THEME, options?: OPTIONS ): DMenu<VALUE> {
		const menu = options && options.menu;
		if( menu instanceof DMenu ) {
			return menu;
		} else {
			return new DMenu( this.toMenuOptions( theme, menu ) );
		}
	}

	protected newMenu( theme: THEME, options?: DMenuOptions<VALUE> ): DMenu<VALUE> {
		return new DMenu<VALUE>( this.toMenuOptions( theme, options ) );
	}

	protected toMenuOptions( theme: THEME, options?: DMenuOptions<VALUE> ): DMenuOptions<VALUE> | undefined {
		options = options || {};
		if( options.fit == null ) {
			options.fit = false;
		}
		return options;
	}

	close(): void {
		this._menu.close();
	}

	get menu() {
		return this._menu;
	}

	protected onSelect( value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void {
		const parent = this.parent;
		if( parent != null ) {
			parent.emit( "select", value, item, menu );
		}
	}

	protected getType(): string {
		return "DMenuBarItem";
	}
}
