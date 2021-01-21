/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonBase, DButtonBaseEvents, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";

/**
 * {@link DDropdownBase} events.
 */
export interface DDropdownBaseEvents<VALUE, TEXT_VALUE, EMITTER> extends DButtonBaseEvents<VALUE, EMITTER> {

}

/**
 * {@link DDropdownBase} "on" options.
 */
export interface DDropdownBaseOnOptions<VALUE, TEXT_VALUE, EMITTER>
	extends Partial<DDropdownBaseEvents<VALUE, TEXT_VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DDropdownBase} options.
 */
export interface DDropdownBaseOptions<
	VALUE = unknown,
	TEXT_VALUE = string,
	THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>,
	EMITTER = any
> extends DButtonBaseOptions<TEXT_VALUE, THEME, EMITTER> {
	/**
	 * Menu options.
	 */
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;

	on?: DDropdownBaseOnOptions<VALUE, TEXT_VALUE, EMITTER>;
}

/**
 * {@link DDropdownBase} theme.
 */
export interface DThemeDropdownBase<TEXT_VALUE = unknown> extends DThemeButtonBase<TEXT_VALUE> {

}

/**
 * A dropdown base class.
 */
export class DDropdownBase<
	VALUE = unknown,
	TEXT_VALUE = string,
	THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>,
	OPTIONS extends DDropdownBaseOptions<VALUE, TEXT_VALUE, THEME> = DDropdownBaseOptions<VALUE, TEXT_VALUE, THEME>
> extends DButtonBase<TEXT_VALUE, THEME, OPTIONS> {
	protected _menu?: DMenu<VALUE>;

	constructor( options?: OPTIONS ) {
		super( options );

		this.on( "active", (): void => {
			this.start();
		});
	}

	protected toMenu( theme: THEME, options?: OPTIONS ): DMenu<VALUE> {
		const menu = options?.menu;
		return ( menu instanceof DMenu ? menu :
			new DMenu<VALUE>( this.toMenuOptions( theme, menu ) )
		);
	}

	protected toMenuOptions( theme: THEME, options?: DMenuOptions<VALUE> ): DMenuOptions<VALUE, DThemeMenu> {
		options = options || {};
		if( options.fit == null ) {
			options.fit = true;
		}
		return options;
	}

	get menu(): DMenu<VALUE> {
		let menu = this._menu;
		if( menu == null ) {
			menu = this.toMenu( this.theme, this._options );
			this._menu = menu;
		}
		return menu;
	}

	protected getType(): string {
		return "DDropdownBase";
	}

	onKeyDown( e: KeyboardEvent ): boolean {
		if( UtilKeyboardEvent.isArrowDownKey( e ) ) {
			this.onKeyDownArrowDown( e );
		}
		return super.onKeyDown( e );
	}

	protected onKeyDownArrowDown( e: KeyboardEvent ): boolean {
		if( this.state.isActionable && this.state.isFocused ) {
			this.onClick( e );
			return true;
		}
		return false;
	}

	start(): void {
		this.menu.open( this );
	}

	close(): void {
		this.menu.close();
	}
}
