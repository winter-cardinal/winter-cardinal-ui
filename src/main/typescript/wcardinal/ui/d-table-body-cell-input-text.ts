/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputTextOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText
> extends DInputTextOptions<THEME> {
}

export interface DThemeTableBodyCellInputText extends DThemeInputText {

}

export class DTableBodyCellInputText<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText,
	OPTIONS extends DTableBodyCellInputTextOptions<ROW, THEME> = DTableBodyCellInputTextOptions<ROW, THEME>
> extends DInputText<THEME, OPTIONS> implements DTableBodyCell<ROW, string> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, string>;
	protected _onChange: DTableBodyCellOnChange<ROW, string>;

	constructor( columnIndex: number, column: DTableColumn<ROW, string>, onChange: DTableBodyCellOnChange<ROW, string>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange( newValue: string, oldValue: string ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, newValue );
			super.onValueChange( newValue, oldValue );
			this._onChange( newValue, oldValue, row, rowIndex, columnIndex, this );
		}
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

	get column(): DTableColumn<ROW, string> {
		return this._column;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = String( value );

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellInputText";
	}
}
