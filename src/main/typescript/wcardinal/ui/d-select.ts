/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu } from "./d-menu-item-menu";

export interface DSelectOptions<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect
> extends DDropdownOptions<VALUE, THEME> {
	value?: VALUE;
}

export interface DThemeSelect extends DThemeDropdown {

}

export class DSelect<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect,
	OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>
> extends DDropdown<VALUE, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _onSelectedBound!: ( value: VALUE, child: DMenuItem<VALUE> ) => void;
	protected _onClosedBound!: () => void;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );

		this._value = null;

		this._onSelectedBound = ( value: VALUE, child: DMenuItem<VALUE> ): void => {
			this.onSelected( value, child, true );
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};

		// Default value
		if( options != null && options.value !== undefined ) {
			this.value = options.value;
		}
	}

	protected onSelected( newValue: VALUE | null, item: DMenuItem<VALUE> | null, emit: boolean ): void {
		if( this._value !== newValue ) {
			// Value
			const oldValue = this._value;
			this._value = newValue;

			// Text
			if( item != null ) {
				this.text = item.text || "";
			} else {
				const options = this._options;
				this.text = ( options && options.text && options.text.value ) || this.theme.newTextValue();
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
		const children = this._menu.children;
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

	get value(): VALUE | null {
		return this._value;
	}

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
