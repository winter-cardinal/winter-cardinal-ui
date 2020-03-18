/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataSorter } from "./d-table-data-sorter";
import { DTableDataTreeItem } from "./d-table-data-tree-item";
import { isFunction } from "./util/is-function";

interface DTableDataFilterTreeParent<ROW> {
	readonly sorter: DTableDataSorter<ROW>;
	readonly rows: ROW[];
	readonly tree?: ROW[];
	isOpened( row: ROW ): boolean;
	update(): void;
}

export class DTableDataFilterTree<ROW extends DTableDataTreeItem<ROW, ROW>>
	extends utils.EventEmitter implements DTableDataFilter<ROW> {
	protected _id: number;
	protected _idUpdated: number;
	protected _isApplied: boolean;
	protected _sorterId: number;
	protected _parent: DTableDataFilterTreeParent<ROW>;
	protected _filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
	protected _filtered: number[] | null;

	constructor( parent: DTableDataFilterTreeParent<ROW> ) {
		super();

		this._id = 0;
		this._idUpdated = -1;
		this._isApplied = false;
		this._sorterId = -1;

		this._parent = parent;
		this._filter = null;
		this._filtered = null;
	}

	get id(): number {
		return this._id;
	}

	apply(): void {
		this._isApplied = true;
		this._id += 1;
		this._parent.update();
	}

	unapply(): void {
		if( this._isApplied ) {
			this._isApplied = false;
			this._id += 1;
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._isApplied;
	}

	protected newFilteredFunction(
		parent: DTableDataFilterTreeParent<ROW>,
		rows: ROW[],
		filter: DTableDataFilterFunction<ROW>,
		filtered: number[],
		cursor: [ number ]
	): boolean {
		let result = false;
		for( let i = 0, imax = rows.length; i < imax; ++i ) {
			const row = rows[ i ];
			const index = cursor[ 0 ];
			cursor[ 0 ] += 1;
			if( row.children != null && 0 < row.children.length && parent.isOpened( row ) ) {
				const position = filtered.length;
				if( this.newFilteredFunction( parent, row.children, filter, filtered, cursor ) ) {
					filtered.splice( position, 0, index );
					result = true;
					continue;
				}
			}
			if( filter( row, index ) ) {
				filtered.push( index );
				result = true;
			}
		}
		return result;
	}

	protected newFilteredObject(
		parent: DTableDataFilterTreeParent<ROW>,
		rows: ROW[],
		filter: DTableDataFilterObject<ROW>,
		filtered: number[],
		cursor: [ number ]
	): boolean {
		let result = false;
		for( let i = 0, imax = rows.length; i < imax; ++i ) {
			const row = rows[ i ];
			const index = cursor[ 0 ];
			cursor[ 0 ] += 1;
			if( row.children != null && 0 < row.children.length && parent.isOpened( row ) ) {
				const position = filtered.length;
				if( this.newFilteredObject( parent, row.children, filter, filtered, cursor ) ) {
					filtered.splice( position, 0, index );
					result = true;
					continue;
				}
			}
			if( filter.test( row, index ) ) {
				filtered.push( index );
				result = true;
			}
		}
		return result;
	}

	protected newFiltered(): number[] | null {
		const filter = this._filter;
		if( filter != null ) {
			const filtered: number[] = [];
			const parent = this._parent;
			const rows = parent.tree;
			if( rows ) {
				const cursor: [ number ] = [ 0 ];
				if( isFunction( filter ) ) {
					this.newFilteredFunction( parent, rows, filter, filtered, cursor );
				} else {
					this.newFilteredObject( parent, rows, filter, filtered, cursor );
				}
			}
			return filtered;
		} else {
			return null;
		}
	}

	get(): DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null {
		return this._filter;
	}

	set( filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null ): void {
		if( this._filter !== filter ) {
			this._filter = filter;
		}
	}

	toDirty(): void {
		this._id += 1;
	}

	update(): void {
		if( this._id !== this._idUpdated || this._parent.sorter.id !== this._sorterId ) {
			this._idUpdated = this._id;
			this._sorterId = this._parent.sorter.id;
			if( this._isApplied ) {
				this._filtered = this.newFiltered();
				this.emit( "change", this );
			} else if( this._filtered != null ) {
				this._filtered = null;
				this.emit( "change", this );
			}
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._filtered;
	}

	map( sortedIndex: number ): number | null {
		let result = sortedIndex;

		const indicesFiltered = this.indices;
		if( indicesFiltered ) {
			const index = indicesFiltered.indexOf( result );
			if( 0 <= index ) {
				result = index;
			} else {
				return null;
			}
		}

		return result;
	}

	unmap( index: number ): number {
		let result = index;

		const indicesFiltered = this.indices;
		if( indicesFiltered ) {
			result = indicesFiltered[ result ];
		}

		return result;
	}
}
