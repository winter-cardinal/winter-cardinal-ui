/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "./d-menu-item";
import { DSelectMultiple, DSelectMultipleOptions, DThemeSelectMultiple } from "./d-select-multiple";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectMultipleOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMultiple<VALUE> = DThemeTableBodyCellSelectMultiple<VALUE>
> extends DSelectMultipleOptions<VALUE, THEME> {

}

export interface DThemeTableBodyCellSelectMultiple<VALUE = unknown> extends DThemeSelectMultiple<VALUE> {

}

export class DTableBodyCellSelectMultiple<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMultiple<VALUE> = DThemeTableBodyCellSelectMultiple<VALUE>,
	OPTIONS extends DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME>
		= DTableBodyCellSelectMultipleOptions<ROW, VALUE, THEME>
> extends DSelectMultiple<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW, VALUE[]> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, VALUE[]>;
	protected _onChange: DTableBodyCellOnChange<ROW, VALUE[]>;

	constructor( columnIndex: number, column: DTableColumn<ROW, VALUE[]>, onChange: DTableBodyCellOnChange<ROW, VALUE[]>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange( newValues: VALUE[], oldValues: VALUE[], items: Array<DMenuItem<VALUE>> ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, newValues );
			super.onValueChange( newValues, oldValues, items );
			this._onChange( newValues, oldValues, row, rowIndex, columnIndex, this );
		}
	}

	protected onKeyDownArrowDown( e: KeyboardEvent ): boolean {
		return false;
	}

	get row(): ROW | undefined {
		return this._row;
	}

	get rowIndex(): number {
		return this._rowIndex;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	get column(): DTableColumn<ROW, VALUE[]> {
		return this._column;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.values = value as VALUE[];

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellSelectMultiple";
	}
}
