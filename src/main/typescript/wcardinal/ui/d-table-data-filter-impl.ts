/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableDataEachIterator } from "./d-table-data";
import { DTableDataFilter, DTableDataFilterFunction, DTableDataFilterObject } from "./d-table-data-filter";
import { utilIsFunction } from "./util/util-is-function";

interface DTableDataFilterImplParent<ROW> {
	each( iterator: DTableDataEachIterator<ROW> ): void;
	update(): void;
}

export class DTableDataFilterImpl<ROW> implements DTableDataFilter<ROW> {
	protected _parent: DTableDataFilterImplParent<ROW>;
	protected _filter: DTableDataFilterFunction<ROW> | DTableDataFilterObject<ROW> | null;
	protected _filtered: number[] | null;
	protected _isDirty: boolean;

	constructor( parent: DTableDataFilterImplParent<ROW> ) {
		this._parent = parent;
		this._filter = null;
		this._filtered = null;
		this._isDirty = false;
	}

	apply(): void {
		this._isDirty = true;
		this._parent.update();
	}

	unapply(): void {
		if( this._filtered != null ) {
			this._filtered = null;
			this._parent.update();
		}
	}

	isApplied(): boolean {
		return this._filtered != null;
	}

	protected newFiltered(): number[] | null {
		const filter = this._filter;
		if( filter != null ) {
			const filtered: number[] = [];
			const parent = this._parent;
			if( utilIsFunction( filter ) ) {
				parent.each(( row: ROW, index: number ): void => {
					if( filter( row, index ) ) {
						filtered.push( index );
					}
				});
			} else {
				parent.each(( row: ROW, index: number ): void => {
					if( filter.test( row, index ) ) {
						filtered.push( index );
					}
				});
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
		this._isDirty = true;
	}

	update(): void {
		if( this._isDirty ) {
			this._isDirty = false;
			this._filtered = this.newFiltered();
		}
	}

	clear(): void {
		const filtered = this._filtered;
		if( filtered != null && 0 < filtered.length ) {
			filtered.length = 0;
			this._parent.update();
		}
	}

	get indices(): number[] | null {
		this.update();
		return this._filtered;
	}
}
