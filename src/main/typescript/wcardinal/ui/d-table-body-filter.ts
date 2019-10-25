/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utilIndexOf } from "./util/util-index-of";
import { utilIsFunction } from "./util/util-is-function";

export type DTableBodyFilterFunction<ROW> = ( row: ROW, index: number, rows: ROW[] ) => boolean;
export interface DTableBodyFilterObject<ROW> {
	test( row: ROW, index: number, rows: ROW[] ): boolean;
}

interface DTableBodyFilterParent<ROW> {
	rows: ROW[];
}

export interface DTableBodyFilter<ROW> {
	readonly indices: number[] | undefined;

	apply(): void;
	unapply(): void;
	isApplied(): boolean;
	get(): DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW> | undefined;
	set( filter: DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW> | undefined ): void;
}

const FILTERED_COMPARATOR = ( a: number, b: number ): number => {
	return a - b;
};

export class DTableBodyFilterImpl<ROW> implements DTableBodyFilter<ROW> {
	protected _parent: DTableBodyFilterParent<ROW>;
	protected _filter?: DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW>;
	protected _filtered?: number[];
	protected _onChange: () => void;

	constructor( parent: DTableBodyFilterParent<ROW>, onChange: () => void ) {
		this._parent = parent;
		this._onChange = onChange;
	}

	apply(): void {
		const newFiltered = this.newFiltered();
		const oldFiltered = this._filtered;
		if( newFiltered != null ) {
			if( oldFiltered != null ) {
				if( newFiltered.length !== oldFiltered.length ) {
					this.setFiltered( newFiltered );
				} else {
					for( let i = 0, imax = newFiltered.length; i < imax; ++i ) {
						if( newFiltered[ i ] !== oldFiltered[ i ] ) {
							this.setFiltered( newFiltered );
							break;
						}
					}
				}
			} else {
				this.setFiltered( newFiltered );
			}
		} else if( oldFiltered != null ) {
			this.setFiltered();
		}
	}

	protected setFiltered( filtered?: number[] ): void {
		this._filtered = filtered;
		this._onChange();
	}

	unapply(): void {
		if( this._filtered != null ) {
			this.setFiltered();
		}
	}

	isApplied(): boolean {
		return this._filtered != null;
	}

	protected newFiltered(): number[] | undefined {
		const filter = this._filter;
		if( filter != null ) {
			const rows = this._parent.rows;
			const rowsLength = rows.length;
			const filtered: number[] = [];
			if( utilIsFunction( filter ) ) {
				for( let i = 0; i < rowsLength; ++i ) {
					const row = rows[ i ];
					if( filter( row, i, rows ) ) {
						filtered.push( i );
					}
				}
			} else {
				for( let i = 0; i < rowsLength; ++i ) {
					const row = rows[ i ];
					if( filter.test( row, i, rows ) ) {
						filtered.push( i );
					}
				}
			}
			return filtered;
		} else {
			return undefined;
		}
	}

	get(): DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW> | undefined {
		return this._filter;
	}

	set( filter: DTableBodyFilterFunction<ROW> | DTableBodyFilterObject<ROW> | undefined ): void {
		if( this._filter !== filter ) {
			this._filter = filter;
		}
	}

	add( rowIndex: number, count: number ): void {
		const filtered = this._filtered;
		if( filtered != null ) {
			for( let i = 0; i < count; ++i ) {
				filtered.push( rowIndex + i );
			}
			filtered.sort( FILTERED_COMPARATOR );
			this._onChange();
		}
	}

	shift( rowIndex: number, amount: number, add: boolean ): void {
		const filtered = this._filtered;
		if( filtered != null ) {
			for( let i = filtered.length - 1; 0 <= i; --i ) {
				const filteredRowIndex = filtered[ i ];
				if( rowIndex <= filteredRowIndex ) {
					filtered[ i ] = filteredRowIndex + amount;
				} else {
					break;
				}
			}
			if( add ) {
				this.add( rowIndex, amount );
			}
			this._onChange();
		}
	}

	clear(): void {
		const filtered = this._filtered;
		if( filtered != null && 0 < filtered.length ) {
			filtered.length = 0;
			this._onChange();
		}
	}

	remove( rowIndex: number ): boolean {
		const filtered = this._filtered;
		if( filtered != null ) {
			const index = utilIndexOf( filtered, rowIndex );
			if( 0 <= index ) {
				filtered.splice( index, 1 );
				this._onChange();
				return true;
			}
		}
		return false;
	}

	get indices(): number[] | undefined {
		return this._filtered;
	}
}
