/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableDataEachIterator } from "./d-table-data";
import {
	DTableDataComparatorFunction, DTableDataComparatorObject,
	DTableDataOrder, DTableDataSorter
} from "./d-table-data-sorter";
import { utilIsFunction } from "./util/util-is-function";

export interface DTableDataSorterImplParent<ROW> {
	each( iterator: DTableDataEachIterator<ROW>, ifrom?: number, ito?: number ): void;
	update(): void;
}

export class DTableBodySorterImpl<ROW> extends utils.EventEmitter implements DTableDataSorter<ROW> {
	protected _parent: DTableDataSorterImplParent<ROW>;
	protected _comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null;
	protected _sorted: number[] | null;
	protected _isDirty: boolean;
	protected _order: DTableDataOrder;

	constructor( parent: DTableDataSorterImplParent<ROW> ) {
		super();

		this._parent = parent;
		this._comparator = null;
		this._sorted = null;
		this._isDirty = false;
		this._order = DTableDataOrder.ASCENDING;
	}

	get order(): DTableDataOrder {
		return this._order;
	}

	set order( order: DTableDataOrder ) {
		this._order = order;
	}

	apply(): void {
		this._isDirty = true;
		this._parent.update();
	}

	unapply(): void {
		if( this._sorted != null ) {
			this._isDirty = false;
			this._sorted = null;
			this.emit( "change", this );
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._sorted != null;
	}

	protected newSorted(): number[] | null {
		const comparator = this._comparator;
		if( comparator != null ) {
			const parent = this._parent;
			const sorted: number[] = [];
			const rows: ROW[] = [];
			parent.each(( row: ROW, index: number ): void => {
				sorted[ index ] = index;
				rows[ index ] = row;
			});
			sorted.sort( this.toComparator( rows, comparator ) );
			return sorted;
		} else {
			return null;
		}
	}

	protected toComparator(
		rows: ROW[],
		comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>
	): ( indexA: number, indexB: number) => number {
		const order = this._order;
		if( utilIsFunction( comparator ) ) {
			if( order === DTableDataOrder.ASCENDING ) {
				return ( indexA: number, indexB: number ): number => {
					return comparator(
						rows[ indexA ], rows[ indexB ],
						indexA, indexB
					);
				};
			} else {
				return ( indexA: number, indexB: number ): number => {
					return comparator(
						rows[ indexB ], rows[ indexA ],
						indexB, indexA
					);
				};
			}
		} else {
			if( order === DTableDataOrder.ASCENDING ) {
				return ( indexA: number, indexB: number ): number => {
					return comparator.compare(
						rows[ indexA ], rows[ indexB ],
						indexA, indexB
					);
				};
			} else {
				return ( indexA: number, indexB: number ): number => {
					return comparator.compare(
						rows[ indexB ], rows[ indexA ],
						indexB, indexA
					);
				};
			}
		}
	}

	get(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null {
		return this._comparator;
	}

	set( comparator: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null ): void {
		if( this._comparator !== comparator ) {
			this._comparator = comparator;
		}
	}

	clear(): void {
		const sorted = this._sorted;
		if( sorted != null && 0 < sorted.length ) {
			sorted.length = 0;
			this._parent.update();
		}
	}

	toDirty(): void {
		const sorted = this._sorted;
		if( sorted != null ) {
			this._isDirty = true;
		}
	}

	update(): void {
		if( this._isDirty ) {
			this._isDirty = false;
			this._sorted = this.newSorted();
			this.emit( "change", this );
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._sorted;
	}
}
