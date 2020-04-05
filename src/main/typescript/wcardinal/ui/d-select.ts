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
export interface DSelectEvents<VALUE, SELF> extends DDropdownBaseEvents<VALUE, DMenuItem<VALUE> | null, SELF> {
	/**
	 * Called when a selection is changed.
	 */
	change( newValue: VALUE | null, oldValue: VALUE | null, item: DMenuItem<VALUE> | null, self: SELF ): void;
}

/**
 * Mappings of event names and handlers.
 */
export interface DSelectOnOptions<VALUE, SELF> extends Partial<DSelectEvents<VALUE, SELF> & Record<string, Function>> {

}

/**
 * DSelect options.
 */
export interface DSelectOptions<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect,
	SELF = any
> extends DDropdownBaseOptions<VALUE, DMenuItem<VALUE> | null, THEME, SELF> {
	/**
	 * A default value.
	 */
	value?: VALUE;

	on?: DSelectOnOptions<VALUE, SELF>;
}

export interface DThemeSelect extends DThemeDropdownBase<DMenuItem<any> | null> {

}

export interface DSelect<VALUE> {
	on<E extends keyof DSelectEvents<VALUE, this>>(
		event: E, handler: DSelectEvents<VALUE, this>[ E ], context?: any
	): this;
	on( event: string, handler: Function, context?: any ): this;

	emit<E extends keyof DSelectEvents<VALUE, this>>(
		event: E, ...args: Parameters<DSelectEvents<VALUE, this>[ E ]>
	): boolean;
	emit( event: string, ...args: any ): boolean;
}

export class DSelect<
	VALUE = unknown,
	THEME extends DThemeSelect = DThemeSelect,
	OPTIONS extends DSelectOptions<VALUE, THEME> = DSelectOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, DMenuItem<VALUE> | null, THEME, OPTIONS> {
	protected _value!: VALUE | null;
	protected _onSelectedBound!: ( value: VALUE, child: DMenuItem<VALUE> ) => void;
	protected _onClosedBound!: () => void;

	constructor( options?: OPTIONS ) {
		super( options );
	}

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._onSelectedBound = ( value: VALUE, child: DMenuItem<VALUE> ): void => {
			this.onSelected( value, child, true );
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};

		// Default value
		this._value = null;
		if( options && options.value !== undefined ) {
			this.value = options.value;
		}
	}

	protected onSelected( newValue: VALUE | null, item: DMenuItem<VALUE> | null, emit: boolean ): void {
		if( this._value !== newValue ) {
			// Value
			const oldValue = this._value;
			this._value = newValue;

			// Text
			this.text = item;

			// Event
			if( emit ) {
				this.emit( "change", newValue, oldValue, item,  this );
			}
		}
	}

	protected onClosed(): void {
		const menu = this.menu;
		menu.off( "select", this._onSelectedBound );
		menu.off( "close", this._onClosedBound );
	}

	start(): void {
		const menu = this.menu;
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
		const item = this.findMenuItem( this.menu, value );
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
