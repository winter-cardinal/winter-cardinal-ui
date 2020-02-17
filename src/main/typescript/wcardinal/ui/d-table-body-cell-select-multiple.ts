/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DSelectMultiple, DSelectMultipleOptions, DThemeSelectMultiple } from "./d-select-multiple";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectMultipleOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMultiple = DThemeTableBodyCellSelectMultiple
> extends DSelectMultipleOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {

}

export interface DThemeTableBodyCellSelectMultiple extends DThemeSelectMultiple {

}

export class DTableBodyCellSelectMultiple<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMultiple = DThemeTableBodyCellSelectMultiple,
	OPTIONS extends DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME>
		= DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME>
> extends DSelectMultiple<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		const column = options.column;
		this._rowIndex = 0;
		this._columnIndex = column.index;
		this._columnData = column.data;
		const selecting = column.data.selecting;
		const getter = selecting.getter;
		this.on( "change", ( newSelected: unknown, oldSelected: unknown ): void => {
			const newValue = getter( newSelected );
			const oldValue = getter( oldSelected );
			const row = this._row;
			if( row !== undefined ) {
				const rowIndex = this._rowIndex;
				const columnIndex = this._columnIndex;
				this._columnData.setter( row, columnIndex, newValue );
				this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
			}
		});
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.values = value as VALUE[];

		const enable = this._columnData.editing.enable;
		if( enable !== false ) {
			this.setReadOnly( enable !== true && ! enable( row, columnIndex ) );
		}
	}

	unset(): void {
		this._row = undefined;
	}

	protected getType(): string {
		return "DTableBodyCellSelectMultiple";
	}
}
