/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonBase, DButtonBaseOptions, DThemeButtonBase } from "./d-button-base";
import { DMenu, DMenuOptions, DThemeMenu } from "./d-menu";
import { DStateAwareOrValueMightBe } from "./d-state-aware";

/**
 * Dropdown options.
 */
export interface DDropdownOptions<
	VALUE = unknown,
	THEME extends DThemeDropdown = DThemeDropdown
> extends DButtonBaseOptions<string, THEME> {
	/**
	 * Menu options.
	 */
	menu?: DMenuOptions<VALUE> | DMenu<VALUE>;
}

/**
 * A dropdown theme.
 */
export interface DThemeDropdown extends DThemeButtonBase {
	getTextFormatter(): ( value: string, caller: DDropdown ) => string;
	getTextValue( state: DBaseState ): string;
	newTextValue(): DStateAwareOrValueMightBe<string>;
}

export class DDropdown<
	VALUE = unknown,
	THEME extends DThemeDropdown = DThemeDropdown,
	OPTIONS extends DDropdownOptions<VALUE, THEME> = DDropdownOptions<VALUE, THEME>
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
		return "DDropdown";
	}

	start(): void {
		this._menu.open( this );
	}

	close(): void {
		this._menu.close();
	}
}
