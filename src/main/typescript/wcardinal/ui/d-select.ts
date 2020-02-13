/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu } from "./d-menu-item-menu";

export type DSelectFormatter<VALUE> = ( value: VALUE | null, text: string | null, caller: any ) => string;

/**
 * DSelect options.
 */
export interface DSelectOptions<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect
> extends DDropdownOptions<VALUE, THEME> {
	/**
	 * A default value.
	 */
	value?: VALUE;

	/**
	 * A value formatter.
	 */
	formatter?: DSelectFormatter<VALUE>;

	/**
	 * False to stop synchronizing the selected item text and the text.
	 */
	sync?: boolean;
}

export interface DThemeSelect extends DThemeDropdown {
	getFormatter(): DSelectFormatter<unknown>;
	isSyncEnabled(): boolean;
}

export class DSelect<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect,
	OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>
> extends DDropdown<VALUE, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _formatter!: DSelectFormatter<VALUE>;
	protected _onSelectedBound!: ( value: VALUE, child: DMenuItem<VALUE> ) => void;
	protected _onClosedBound!: () => void;
	protected _isSyncEnabled!: boolean;

	constructor( options?: OPTIONS ) {
		super( options );
	}

	protected init( options?: OPTIONS ) {
		super.init( options );

		const theme = this.theme;
		this._value = null;
		this._formatter = this.toFormatter( theme, options );
		this._isSyncEnabled = this.toSync( theme, options );

		this._onSelectedBound = ( value: VALUE, child: DMenuItem<VALUE> ): void => {
			this.onSelected( value, child, true );
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};

		// Default value
		if( options && options.value !== undefined ) {
			this.value = options.value;
		}
	}

	protected toFormatter( theme: THEME, options?: OPTIONS ): DSelectFormatter<VALUE> {
		return ( options && options.formatter != null ? options.formatter : theme.getFormatter() );
	}

	protected toSync( theme: THEME, options?: OPTIONS ): boolean {
		return ( options && options.sync != null ? options.sync : theme.isSyncEnabled() );
	}

	protected onSelected( newValue: VALUE | null, item: DMenuItem<VALUE> | null, emit: boolean ): void {
		if( this._isSyncEnabled === false || this._value !== newValue ) {
			// Value
			const oldValue = this._value;
			this._value = newValue;

			// Text
			if( this._isSyncEnabled ) {
				this.text = this._formatter( newValue, this.toItemText( item ), this );
			}

			// Event
			if( emit ) {
				this.emit( "change", newValue, oldValue, item, this );
			}
		}
	}

	protected onClosed(): void {
		const menu = this._menu;
		menu.off( "select", this._onSelectedBound );
		menu.off( "close", this._onClosedBound );
	}

	start(): void {
		const menu = this._menu;
		menu.on( "select", this._onSelectedBound );
		menu.on( "close", this._onClosedBound );
		super.start();
	}

	protected findMenuItem( menu: DMenu<VALUE>, value: VALUE | null ): DMenuItem<VALUE> | null {
		const children = menu.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DMenuItemMenu ) {
				const result = this.findMenuItem( child.menu, value );
				if( result != null ) {
					return result;
				}
			} else if( child instanceof DMenuItem ) {
				if( child.value === value ) {
					return child;
				}
			}
		}
		return null;
	}

	/**
	 * Returns a selected value or null.
	 */
	get value(): VALUE | null {
		return this._value;
	}

	/**
	 * Sets to the specified value.
	 */
	set value( value: VALUE | null ) {
		const item = this.findMenuItem( this._menu, value );
		if( item != null ) {
			this.onSelected( value, item, false );
		} else {
			this.onSelected( null, null, false );
		}
	}

	protected getType(): string {
		return "DSelect";
	}
}
