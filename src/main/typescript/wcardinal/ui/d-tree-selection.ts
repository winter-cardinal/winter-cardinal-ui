import { DTreeItemRawData } from "./d-tree";

/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export class DTreeSelection {
	protected _selection!: DTreeItemRawData[];

	constructor() {
		this._selection = [];
	}

	/**
	 * Select an item.
	 * Add item data to this._selection if it not exist in this._selection.
	 *
	 * @param item Reference data of item want to remove in “value” array.
	 */
	public add( item: DTreeItemRawData ): void {
		if( this._selection.indexOf( item ) === -1 ) {
			this._selection.push( item );
		}
	}

	/**
	 * Un-select an item.
	 * remove item data to this._selection if it exist in this._selection.
	 *
	 * @param item Reference data of item want to remove in “value” array.
	 */
	public remove( item: DTreeItemRawData ): void {
		const itemIndex = this._selection.indexOf( item );
		if( itemIndex !== -1 ) {
			this._selection.splice( itemIndex, 1 );
		}
	}

	/**
	 * Select/un-select an item.
	 * If item data not exist in this._selection, add it to this._selection.
	 * If item data exist in this._selection, remove it to this._selection.
	 *
	 * @param item Reference data of item want to remove in “value” array.
	 */
	public toggle( item: DTreeItemRawData ): void {
		const itemIndex = this._selection.indexOf( item );
		if( itemIndex !== -1 ) {
			this._selection.splice( itemIndex, 1 );
		} else {
			this._selection.push( item );
		}
	}

	/**
	 * Un-select all item.
	 *
	 */
	public clear(): void {
		this._selection.length = 0;
	}

	/**
	 * Get selected item by index.
	 *
	 * @param index index of item in this._selection
	 *
	 * @returns  Reference data of selected item in “value” array.
	 */
	public get( index: number ): DTreeItemRawData | null {
		const selection = this._selection;
		if( 0 <= index && index < selection.length ) {
			return selection[ index ];
		}
		return null;
	}

	/**
	 * Check item is selected or not.
	 *
	 * @param item Reference data of item want to remove in “value” array.
	 *
	 * @returns selected state of checked item.
	 */
	public contains( item: DTreeItemRawData ): boolean {
		return this._selection.indexOf( item ) !== -1;
	}

	/**
	 * Get number of selected .
	 *
	 * @returns number of selected.
	 */
	public size(): number {
		return this._selection.length;
	}

	/**
	 * Iterate over selected items.
	 *
	 * @param iteratee  boolean function. If the iteratee explicitly returns false, an iteration stops.
	 * @param item data of browsed item.
	 */
	public each( iteratee: ( item: DTreeItemRawData ) => boolean ): void {
		for (const item of this._selection) {
			if( !iteratee( item ) ) {
				return;
			}
		}
	}
}
