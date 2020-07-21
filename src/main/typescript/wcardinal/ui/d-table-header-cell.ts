/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBaseStateSet } from "./d-base-state-set";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DStateAwareOrValueMightBe } from "./d-state-aware";
import { DTableCellState } from "./d-table-cell-state";
import { DTableColumn } from "./d-table-column";
import {
	DTableDataComparatorFunction, DTableDataComparatorObject,
	DTableDataOrder, DTableDataSorter
} from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
import { UtilPointerEvent } from "./util/util-pointer-event";

export interface DTableHeaderCellHeader<ROW> {
	readonly table: DTableHeaderTable<ROW> | null;
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	header: DTableHeaderCellHeader<ROW>;
	column: DTableColumn<ROW>;
}

export interface DThemeTableHeaderCell extends DThemeImage {
	getTextFormatter(): ( value: string | null, caller: DTableHeaderCell<unknown> ) => string;
	getTextValue( state: DBaseStateSet ): string | null;
	newTextValue(): DStateAwareOrValueMightBe<string | null>;
}

export class DTableHeaderCell<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _sorter?: DTableDataSorter<ROW>;
	protected _onSorterChangeBound?: () => void;
	protected _comparator?: DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW>;
	protected _header: DTableHeaderCellHeader<ROW>;
	protected _column: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
		this._header = options.header;
		this._column = options.column;
		this._comparator = options.column.sorting.comparator;

		const sorting = options.column.sorting;
		if( sorting.enable ) {
			UtilPointerEvent.onClick( this, ( e: interaction.InteractionEvent ): void => {
				this.onClick();
			});
		}
	}

	get sorter(): DTableDataSorter<ROW> | null {
		let sorter = this._sorter || null;
		if( sorter == null ) {
			const table = this._header.table;
			if( table ) {
				sorter = table.data.sorter;
				this._sorter = sorter;
				this._onSorterChangeBound = this._onSorterChangeBound || (() => {
					this.onSorterChange();
				});
				sorter.on( "change", this._onSorterChangeBound );
			}
		}
		return sorter;
	}

	get comparator(): DTableDataComparatorFunction<ROW> | DTableDataComparatorObject<ROW> | null {
		return this._comparator || null;
	}

	onClick(): void {
		const comparator = this._comparator;
		if( comparator ) {
			const sorter = this.sorter;
			if( sorter ) {
				if( sorter.get() === comparator ) {
					if( sorter.order === DTableDataOrder.ASCENDING ) {
						sorter.order = DTableDataOrder.DESCENDING;
						sorter.apply();
					} else {
						sorter.set( null );
						sorter.apply();
					}
				} else {
					sorter.set( comparator );
					sorter.order = DTableDataOrder.ASCENDING;
					sorter.apply();
				}
			}
		}
	}

	protected onSorterChange(): void {
		const sorter = this._sorter;
		const comparator = this._comparator;
		if( sorter && comparator ) {
			const SORTED_ASCENDING = DTableCellState.SORTED_ASCENDING;
			const SORTED_DESCENDING = DTableCellState.SORTED_DESCENDING;
			if( sorter.isApplied() && sorter.get() === comparator ) {
				if( sorter.order === DTableDataOrder.ASCENDING ) {
					this.state.set( SORTED_ASCENDING, SORTED_DESCENDING );
				} else {
					this.state.set( SORTED_DESCENDING, SORTED_ASCENDING );
				}
			} else {
				this.state.remove( SORTED_ASCENDING | SORTED_DESCENDING );
			}
		}
	}

	protected init( options: OPTIONS ) {
		super.init( options );
	}

	protected getType(): string {
		return "DTableHeaderCell";
	}

	destroy(): void {
		const sorter = this._sorter;
		const onSorterChangeBound = this._onSorterChangeBound;
		if( sorter && onSorterChangeBound ) {
			sorter.off( "change", onSorterChangeBound );
		}
		this._sorter = undefined;
		this._onSorterChangeBound = undefined;
		this._comparator = undefined;

		super.destroy();
	}
}
