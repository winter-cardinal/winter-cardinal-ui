/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DMenu, DMenuOptions } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

export interface DMenuBarItemOptions<
	VALUE = unknown,
	THEME extends DThemeMenuBarItem<VALUE> = DThemeMenuBarItem<VALUE>
> extends DButtonOptions<VALUE, THEME> {
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
}

export interface DThemeMenuBarItem<VALUE = unknown> extends DThemeButton<VALUE> {

}

export class DMenuBarItem<
	VALUE = unknown,
	THEME extends DThemeMenuBarItem<VALUE> = DThemeMenuBarItem<VALUE>,
	OPTIONS extends DMenuBarItemOptions<VALUE, THEME> = DMenuBarItemOptions<VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> {
	protected _menu!: DMenu<VALUE>;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._menu = this.toMenu( this.theme, options );
		this._menu.on( "select", ( value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void => {
			this.onMenuSelect( value, item, menu );
		});
	}

	protected toMenu( theme: THEME, options?: OPTIONS ): DMenu<VALUE> {
		const menu = options?.menu;
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

	protected onActivate( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void {
		super.onActivate( e );
		this.open();
	}

	open(): void {
		this._menu.open( this );
	}

	close(): void {
		this._menu.close();
	}

	get menu() {
		return this._menu;
	}

	protected onMenuSelect( value: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void {
		this.parent?.emit( "select", value, item, menu );
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( this.state.isActionable && this.state.isFocused && UtilKeyboardEvent.isArrowDownKey( e ) ) {
			this.onActivate( e );
		}
		return super.onKeyDown( e );
	}

	protected getType(): string {
		return "DMenuBarItem";
	}
}
