/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputInteger, DInputIntegerOptions, DThemeInputInteger } from "./d-input-integer";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { DTableDataSupplimental } from "./d-table-data";

export interface DTableBodyCellInputIntegerOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputInteger = DThemeTableBodyCellInputInteger
> extends DInputIntegerOptions<THEME> {}

export interface DThemeTableBodyCellInputInteger extends DThemeInputInteger {}

export class DTableBodyCellInputInteger<
		ROW = unknown,
		THEME extends DThemeTableBodyCellInputInteger = DThemeTableBodyCellInputInteger,
		OPTIONS extends DTableBodyCellInputIntegerOptions<
			ROW,
			THEME
		> = DTableBodyCellInputIntegerOptions<ROW, THEME>
	>
	extends DInputInteger<THEME, OPTIONS>
	implements DTableBodyCell<ROW, number>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, number>;
	protected _onChange: DTableBodyCellOnChange<ROW, number>;
	protected _forcibly?: boolean;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, number>,
		onChange: DTableBodyCellOnChange<ROW, number>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange(newValue: number, oldValue: number): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const column = this._column;
			column.setter(row, columnIndex, newValue);
			super.onValueChange(newValue, oldValue);
			this._onChange(newValue, oldValue, row, rowIndex, columnIndex, column, this);
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

	get column(): DTableColumn<ROW, number> {
		return this._column;
	}

	set(
		value: unknown,
		row: ROW,
		supplimental: DTableDataSupplimental | null,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text.setValue(Number(value), forcibly || this._forcibly);
		this._forcibly = undefined;

		DTableBodyCells.set(this, row, columnIndex, this._column);
	}

	unset(forcibly?: boolean): void {
		this._row = undefined;
		this._rowIndex = -1;
		this._forcibly ||= forcibly;
	}

	protected getType(): string {
		return "DTableBodyCellInputInteger";
	}
}
