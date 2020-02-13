/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { isString } from "./util/is-string";

/**
 * DSelectBase options.
 */
export interface DSelectBaseOptions<
	VALUE = unknown,
	THEME extends DThemeSelectBase = DThemeSelectBase
> extends DButtonBaseOptions<string, THEME> {
	/**
	 * Menu options.
	 */
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
}

/**
 * A DSelectBase theme.
 */
export interface DThemeSelectBase extends DThemeButtonBase {
	getTextFormatter(): ( value: string, caller: DSelectBase ) => string;
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAwareOrValueMightBe<string>;
}

export class DSelectBase<
	VALUE = unknown,
	THEME extends DThemeSelectBase = DThemeSelectBase,
	OPTIONS extends DSelectBaseOptions<VALUE, THEME> = DSelectBaseOptions<VALUE, THEME>
> extends DButtonBase<string, THEME, OPTIONS> {
	protected _menu!: DMenu<VALUE>;

	constructor( options?: OPTIONS ) {
		super( options );

		this.on( "active", (): void => {
			this.start();
		});
	}

	protected init( options?: OPTIONS ) {
		super.init( options );
		this._menu = this.toMenu( this.theme, options );
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
		return this._menu;
	}

	protected getType(): string {
		return "DSelectBase";
	}

	start(): void {
		this._menu.open( this );
	}

	close(): void {
		this._menu.close();
	}
}
