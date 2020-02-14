/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdownBase, DDropdownBaseOptions, DThemeDropdownBase } from "./d-dropdown-base";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemCheck } from "./d-menu-item-check";
import { DMenuItemMenu } from "./d-menu-item-menu";

/**
 * DSelect options.
 */
export interface DSelectMultipleOptions<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple = DThemeSelectMultiple
> extends DDropdownBaseOptions<VALUE, Array<DMenuItem<VALUE>>, THEME> {
	/**
	 * A default values.
	 */
	values?: VALUE[];
}

export interface DThemeSelectMultiple extends DThemeDropdownBase<Array<DMenuItem<any>>> {

}

export class DSelectMultiple<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple = DThemeSelectMultiple,
	OPTIONS extends DSelectMultipleOptions<VALUE, THEME> = DSelectMultipleOptions<VALUE, THEME>
> extends DDropdownBase<VALUE, Array<DMenuItem<VALUE>>, THEME, OPTIONS> {
	protected _values!: VALUE[];
	protected _onSelectedBound!: ( value: VALUE, child: DMenuItem<VALUE> ) => void;
	protected _onClosedBound!: () => void;

	constructor( options?: OPTIONS ) {
		super( options );
	}

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._onSelectedBound = ( value: VALUE, child: DMenuItem<VALUE> ): void => {
			if( child instanceof DMenuItemCheck ) {
				const oldValues = this._values;
				const newValues: VALUE[] = [];
				const newItems: Array<DMenuItem<VALUE>> = [];
				const menu = this._menu;
				if( child.isActive() ) {
					this.updateMenuItems( menu, oldValues, value, undefined, newValues, newItems );
				} else {
					this.updateMenuItems( menu, oldValues, undefined, value, newValues, newItems );
				}
				this._values = newValues;
				this.onSelected( newValues, oldValues, newItems, true );
			} else {
				this.emit( "select", value, child, this );
			}
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};

		// Default value
		this._values = [];
		if( options && options.values !== undefined ) {
			this.values = options.values;
		} else {
			this.updateMenuItems( this._menu, this._values );
		}
	}

	protected onSelected( newValues: VALUE[], oldValues: VALUE[], items: Array<DMenuItem<VALUE>>, emit: boolean ): void {
		// Chante texts
		this.text = items;

		// Event
		if( emit ) {
			this.emit( "change", newValues, oldValues, this );
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
		this.updateMenuItems( menu, this._values );
		super.start();
	}

	/**
	 * Returns a selected value or null.
	 */
	get values(): VALUE[] {
		return this._values;
	}

	/**
	 * Sets to the specified value.
	 */
	set values( values: VALUE[] ) {
		const oldValues = this._values;
		if( ! this.isSameValues( values, oldValues ) ) {
			const newValues: VALUE[] = [];
			const newItems: Array<DMenuItem<VALUE>> = [];
			this.updateMenuItems( this._menu, values, undefined, undefined, newValues, newItems );
			this._values = newValues;
			this.onSelected( newValues, oldValues, newItems, false );
		}
	}

	protected isSameValues( a: VALUE[], b: VALUE[] ): boolean {
		if( a.length === b.length ) {
			for( let i = 0, imax = a.length; i < imax; ++i ) {
				if( b.indexOf( a[ i ] ) < 0 ) {
					return false;
				}
			}
		}
		return false;
	}

	protected updateMenuItems(
		menu: DMenu<VALUE>,
		oldValues: VALUE[],
		addedValue?: VALUE,
		removedValue?: VALUE,
		newValues?: VALUE[],
		newItems?: Array<DMenuItem<VALUE>>
	): void {
		const children = menu.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DMenuItemMenu ) {
				this.updateMenuItems( child.menu, oldValues, addedValue, removedValue, newValues, newItems );
			} else if( child instanceof DMenuItemCheck ) {
				const childValue = child.value;
				if( removedValue !== undefined && removedValue === childValue ) {
					child.setActive( false );
				} else if( ( addedValue !== undefined && child.value === addedValue ) || 0 <= oldValues.indexOf( child.value ) ) {
					if( newValues ) {
						newValues.push( child.value );
					}
					if( newItems ) {
						newItems.push( child );
					}
					child.setActive( true );
				} else {
					child.setActive( false );
				}
			}
		}
	}

	protected getType(): string {
		return "DSelectMultiple";
	}
}