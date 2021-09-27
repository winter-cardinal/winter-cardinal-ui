/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputReal, DInputRealOptions, DThemeInputReal } from "./d-input-real";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputRealOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputReal = DThemeTableBodyCellInputReal
> extends DInputRealOptions<THEME> {}

export interface DThemeTableBodyCellInputReal extends DThemeInputReal {}

export class DTableBodyCellInputReal<
		ROW = unknown,
		THEME extends DThemeTableBodyCellInputReal = DThemeTableBodyCellInputReal,
		OPTIONS extends DTableBodyCellInputRealOptions<ROW, THEME> = DTableBodyCellInputRealOptions<
			ROW,
			THEME
		>
	>
	extends DInputReal<THEME, OPTIONS>
	implements DTableBodyCell<ROW, number>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, number>;
	protected _onChange: DTableBodyCellOnChange<ROW, number>;

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
			this._column.setter(row, columnIndex, newValue);
			super.onValueChange(newValue, oldValue);
			this._onChange(newValue, oldValue, row, rowIndex, columnIndex, this);
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
		supplimental: unknown,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = Number(value);

		const column = this._column;
		DTableBodyCells.setReadOnly(this, row, columnIndex, column);
		DTableBodyCells.setRenderable(this, row, columnIndex, column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellInputReal";
	}
}
