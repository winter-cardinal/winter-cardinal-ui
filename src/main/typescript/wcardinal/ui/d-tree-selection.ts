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

	public add( item: DTreeItemRawData ) {
		if( this._selection.indexOf( item ) === -1 ) {
			this._selection.push( item );
		}
	}

	public remove( item: DTreeItemRawData ) {
		const itemIndex = this._selection.indexOf( item );
		if( itemIndex !== -1 ) {
			this._selection.splice( itemIndex, 1 );
		}
	}

	public toggle( item: DTreeItemRawData ) {
		const itemIndex = this._selection.indexOf( item );
		if( itemIndex !== -1 ) {
			this._selection.splice( itemIndex, 1 );
		} else {
			this._selection.push( item );
		}
	}

	public clear() {
		this._selection.length = 0;
	}

	public get( index: number ): DTreeItemRawData | null {
		const selection = this._selection;
		if( 0 <= index && index < selection.length ) {
			return selection[ index ];
		}
		return null;
	}

	public contains( item: DTreeItemRawData ) {
		return this._selection.indexOf( item ) !== -1;
	}

	public size() {
		return this._selection.length;
	}

}
