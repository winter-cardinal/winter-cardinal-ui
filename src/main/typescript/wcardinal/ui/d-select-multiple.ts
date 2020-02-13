/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DMenuItemCheck } from "./d-menu-item-check";
import { DMenuItemMenu } from "./d-menu-item-menu";
import { DSelectBase, DSelectBaseOptions, DThemeSelectBase } from "./d-select-base";

export type DSelectMultipleFormatter<VALUE> = ( vales: VALUE[], texts: Array<string | null>, caller: any ) => string;

/**
 * DSelect options.
 */
export interface DSelectMultipleOptions<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple = DThemeSelectMultiple
> extends DSelectBaseOptions<VALUE, THEME> {
	/**
	 * A default values.
	 */
	values?: VALUE[];

	/**
	 * A value formatter.
	 */
	formatter?: DSelectMultipleFormatter<VALUE>;
}

export interface DThemeSelectMultiple extends DThemeSelectBase {
	getFormatter(): DSelectMultipleFormatter<unknown>;
}

export class DSelectMultiple<
	VALUE = unknown,
	THEME extends DThemeSelectMultiple = DThemeSelectMultiple,
	OPTIONS extends DSelectMultipleOptions<VALUE, THEME> = DSelectMultipleOptions<VALUE, THEME>
> extends DSelectBase<VALUE, THEME, OPTIONS> {
	protected _values!: VALUE[];
	protected _formatter!: DSelectMultipleFormatter<VALUE>;
	protected _texts!: string[];
	protected _onSelectedBound!: ( value: VALUE, child: DMenuItem<VALUE> ) => void;
	protected _onClosedBound!: () => void;

	constructor( options?: OPTIONS ) {
		super( options );
	}

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._values = [];
		this._texts = [];
		this._formatter = this.toFormatter( this.theme, options );

		this._onSelectedBound = ( value: VALUE, child: DMenuItem<VALUE> ): void => {
			if( child instanceof DMenuItemCheck ) {
				const oldValues = this._values;
				const newValues: VALUE[] = [];
				const newTexts: string[] = [];
				if( child.isActive() ) {
					this.updateMenuItems( this._menu, oldValues, value, undefined, newValues, newTexts );
				} else {
					this.updateMenuItems( this._menu, oldValues, undefined, value, newValues, newTexts );
				}
				this._values = newValues;
				this._texts = newTexts;
				this.onSelected( newValues, newTexts, true );
			} else {
				this.emit( "select", value, child, this );
			}
		};
		this._onClosedBound = (): void => {
			this.onClosed();
		};

		// Default value
		if( options && options.values !== undefined ) {
			this.values = options.values;
		} else {
			this.updateMenuItems( this._menu, this._values, undefined, undefined, this._values, this._texts );
		}
	}

	protected toFormatter( theme: THEME, options?: OPTIONS ): DSelectMultipleFormatter<VALUE> {
		return ( options && options.formatter != null ? options.formatter : theme.getFormatter() );
	}

	protected onSelected( values: VALUE[], texts: Array<string | null>, emit: boolean ): void {
		// Chante texts
		this.text = this._formatter( values, texts, this );

		// Event
		if( emit ) {
			this.emit( "change", values, this );
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
		const newValues: VALUE[] = [];
		const newTexts: string[] = [];
		this.updateMenuItems( this._menu, values, undefined, undefined, newValues, newTexts );
		const oldValues = this._values;
		this._values = newValues;
		if( ! this.isSameValues( newValues, oldValues ) ) {
			this.onSelected( newValues, newTexts, false );
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
		addedValue: VALUE | undefined,
		removedValue: VALUE | undefined,
		newValues: VALUE[],
		newTexts: Array<string | null>
	): void {
		const children = menu.children;
		for( let i = 0, imax = children.length; i < imax; ++i ) {
			const child = children[ i ];
			if( child instanceof DMenuItemMenu ) {
				this.updateMenuItems( child.menu, oldValues, addedValue, removedValue, newValues, newTexts );
			} else if( child instanceof DMenuItemCheck ) {
				const childValue = child.value;
				if( removedValue !== undefined && removedValue === childValue ) {
					child.setActive( false );
				} else if( ( addedValue !== undefined && child.value === addedValue ) || 0 <= oldValues.indexOf( child.value ) ) {
					newValues.push( child.value );
					newTexts.push( this.toItemText( child ) );
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
