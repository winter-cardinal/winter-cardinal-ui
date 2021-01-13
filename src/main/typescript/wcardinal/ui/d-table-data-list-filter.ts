/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { DTableDataSorter } from "./d-table-data-sorter";
import { isFunction } from "./util/is-function";

interface DTableDataListFilterParent<ROW> {
	readonly sorter: DTableDataSorter<ROW>;
	readonly rows: ROW[];
	update(): void;
}

export class DTableDataListFilter<ROW> extends utils.EventEmitter implements DTableDataFilter<ROW> {
	protected _id: number;
	protected _idUpdated: number;
	protected _isApplied: boolean;
	protected _sorterId: number;
	protected _parent: DTableDataListFilterParent<ROW>;
	protected _filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
	protected _filtered: number[] | null;

	constructor( parent: DTableDataListFilterParent<ROW> ) {
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

	protected newFiltered(): number[] | null {
		const filter = this._filter;
		if( filter != null ) {
			const filtered: number[] = [];
			const parent = this._parent;
			const sorter = parent.sorter;
			const rows = parent.rows;
			if( isFunction( filter ) ) {
				const indicesSorted = sorter.indices;
				if( indicesSorted ) {
					for( let i = 0, imax = indicesSorted.length; i < imax; ++i ) {
						const indexSorted = indicesSorted[ i ];
						if( filter( rows[ indexSorted ], indexSorted ) ) {
							filtered.push( i );
						}
					}
				} else {
					for( let i = 0, imax = rows.length; i < imax; ++i ) {
						if( filter( rows[ i ], i ) ) {
							filtered.push( i );
						}
					}
				}
			} else {
				const indicesSorted = sorter.indices;
				if( indicesSorted ) {
					for( let i = 0, imax = indicesSorted.length; i < imax; ++i ) {
						const indexSorted = indicesSorted[ i ];
						if( filter.test( rows[ indexSorted ], indexSorted ) ) {
							filtered.push( i );
						}
					}
				} else {
					for( let i = 0, imax = rows.length; i < imax; ++i ) {
						if( filter.test( rows[ i ], i ) ) {
							filtered.push( i );
						}
					}
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
