/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdownBase, DDropdownBaseEvents, DDropdownBaseOptions, DThemeDropdownBase } from "./d-dropdown-base";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemMenu } from "./d-menu-item-menu";

/**
 * {@link DSelect} events.
 */
export interface DSelectEvents<VALUE, EMITTER> extends DDropdownBaseEvents<VALUE, DMenuItem<VALUE> | null, EMITTER> {
	/**
	 * Triggered when a selection is changed.
	 *
	 * @param newVAlue a newly-selected value
	 * @param oldValue a previously-selected value
	 * @param item a newly-selected item
	 * @param emitter an emitter
	 */
	change( newValue: VALUE | null, oldValue: VALUE | null, item: DMenuItem<VALUE> | null, emitter: EMITTER ): void;
}

/**
 * {@link DSelect} "on" options.
 */
export interface DSelectOnOptions<VALUE, EMITTER> extends Partial<DSelectEvents<VALUE, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DSelect} options.
 */
export interface DSelectOptions<
	VALUE = unknown,
	THEME extends DThemeSelect<VALUE> = DThemeSelect<VALUE>,
	EMITTER = any
> extends DDropdownBaseOptions<VALUE, DMenuItem<VALUE> | null, THEME, EMITTER> {
	/**
	 * A default value.
	 */
	value?: VALUE | null;

	on?: DSelectOnOptions<VALUE, EMITTER>;
}

/**
 * {@link DSelect} theme.
 */
export interface DThemeSelect<VALUE = unknown> extends DThemeDropdownBase<DMenuItem<VALUE> | null> {

}

/**
 * A selector class.
 */
export class DSelect<
	VALUE = unknown,
	THEME extends DThemeSelect<VALUE> = DThemeSelect<VALUE>,
	OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, DMenuItem<VALUE> | null, THEME, OPTIONS> {
	protected _value: VALUE | null;

	constructor( options?: OPTIONS ) {
		super( options );

		// Default value
		this._value = null;
		const value = options?.value;
		if( value != null ) {
			this.value = value;
		}
	}

	protected onMenuSelect( newValue: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE> ): void {
		super.onMenuSelect( newValue, item, menu );
		const oldValue = this._value;
		if( oldValue !== newValue ) {
			this._value = newValue;
			this.text = item;
			this.onValueChange( newValue, oldValue, item );
		}
	}

	protected onValueChange( newValue: VALUE | null, oldValue: VALUE | null, item: DMenuItem<VALUE> | null ) {
		this.emit( "change", newValue, oldValue, item,  this );
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
		if( this._value !== value ) {
			const item = this.findMenuItem( this.menu, value );
			this._value = value;
			this.text = item;
		}
	}

	protected getType(): string {
		return "DSelect";
	}
}
