/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableDataEachIterator } from "./d-table-data";
import { DTableDataSorter, DTableDataSorterFunction, DTableDataSorterObject } from "./d-table-data-sorter";
import { utilIsFunction } from "./util/util-is-function";

export interface DTableDataSorterImplParent<ROW> {
	each( iterator: DTableDataEachIterator<ROW>, ifrom?: number, ito?: number ): void;
	update(): void;
}

export class DTableBodySorterImpl<ROW> implements DTableDataSorter<ROW> {
	protected _parent: DTableDataSorterImplParent<ROW>;
	protected _sorter: DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW> | null;
	protected _sorted: number[] | null;
	protected _isDirty: boolean;

	constructor( parent: DTableDataSorterImplParent<ROW> ) {
		this._parent = parent;
		this._sorter = null;
		this._sorted = null;
		this._isDirty = false;
	}

	apply(): void {
		this._isDirty = true;
		this._parent.update();
	}

	unapply(): void {
		if( this._sorted != null ) {
			this._isDirty = false;
			this._sorted = null;
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._sorted != null;
	}

	protected newSorted(): number[] | null {
		const sorter = this._sorter;
		if( sorter != null ) {
			const parent = this._parent;
			const sorted: number[] = [];
			const rows: ROW[] = [];
			parent.each(( row: ROW, index: number ): void => {
				sorted[ index ] = index;
				rows[ index ] = row;
			});
			this.toSorted( sorted, rows, sorter );
			return sorted;
		} else {
			return null;
		}
	}

	protected toSorted(
		sorted: number[], rows: ROW[],
		sorter: DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW>
	): number[] {
		if( utilIsFunction( sorter ) ) {
			sorted.sort(( indexA: number, indexB: number ): number => {
				const rowA: ROW = rows[ indexA ];
				const rowB: ROW = rows[ indexB ];
				return sorter( rowA, rowB, indexA, indexB );
			});
		} else {
			sorted.sort(( indexA: number, indexB: number ): number => {
				const rowA: ROW = rows[ indexA ];
				const rowB: ROW = rows[ indexB ];
				return sorter.compare( rowA, rowB, indexA, indexB );
			});
		}
		return sorted;
	}

	get(): DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW> | null {
		return this._sorter;
	}

	set( sorter: DTableDataSorterFunction<ROW> | DTableDataSorterObject<ROW> | null ): void {
		if( this._sorter !== sorter ) {
			this._sorter = sorter;
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
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._sorted;
	}
}
