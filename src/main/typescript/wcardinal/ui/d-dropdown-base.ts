/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonBase, DButtonBaseOptions, DButtonOnOptions, DThemeButtonBase } from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isString } from "./util/is-string";

export interface DDropdownBaseOnOptions<VALUE, TEXT_VALUE> extends DButtonOnOptions<VALUE> {

}

/**
 * Dropdown base options.
 */
export interface DDropdownBaseOptions<
	VALUE = unknown,
	TEXT_VALUE = string,
	THEME extends DThemeDropdownBase<TEXT_VALUE> = DThemeDropdownBase<TEXT_VALUE>
> extends DButtonBaseOptions<TEXT_VALUE, THEME> {
	/**
	 * Menu options.
	 */
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;

	on?: DDropdownBaseOnOptions<VALUE, TEXT_VALUE>;
}

/**
 * A Dropdown base theme.
 */
export interface DThemeDropdownBase<TEXT_VALUE> extends DThemeButtonBase {
	getTextFormatter(): ( value: TEXT_VALUE, caller: DDropdownBase ) => string;
	getTextValue( state: DBaseState ): TEXT_VALUE;
	newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
}

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

	protected toItemText( item: DMenuItem<VALUE> | null ): string | null {
		if( item ) {
			const text = item.text;
			if( isString( text ) ) {
				return text;
			} else if( text != null ) {
				const computed = text( item.state );
				if( computed != null ) {
					return computed;
				}
			}
		}
		return null;
	}

	protected toMenu( theme: THEME, options?: OPTIONS ): DMenu<VALUE> {
		const menu = options && options.menu;
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

	start(): void {
		this.menu.open( this );
	}

	close(): void {
		this.menu.close();
	}
}
