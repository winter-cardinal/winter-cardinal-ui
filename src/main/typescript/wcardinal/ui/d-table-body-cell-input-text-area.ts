/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputTextArea, DInputTextAreaOptions, DThemeInputTextArea } from "./d-input-text-area";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { DTableDataSupplimental } from "./d-table-data";

export interface DTableBodyCellInputTextAreaOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputTextArea = DThemeTableBodyCellInputTextArea
> extends DInputTextAreaOptions<THEME> {}

export interface DThemeTableBodyCellInputTextArea extends DThemeInputTextArea {}

export class DTableBodyCellInputTextArea<
		ROW = unknown,
		THEME extends DThemeTableBodyCellInputTextArea = DThemeTableBodyCellInputTextArea,
		OPTIONS extends DTableBodyCellInputTextAreaOptions<
			ROW,
			THEME
		> = DTableBodyCellInputTextAreaOptions<ROW, THEME>
	>
	extends DInputTextArea<THEME, OPTIONS>
	implements DTableBodyCell<ROW, string>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, string>;
	protected _onChange: DTableBodyCellOnChange<ROW, string>;
	protected _forcibly?: boolean;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, string>,
		onChange: DTableBodyCellOnChange<ROW, string>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange(newValue: string, oldValue: string): void {
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

	get column(): DTableColumn<ROW, string> {
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
		this.text.setValue(String(value), forcibly || this._forcibly);
		this._forcibly = undefined;

		DTableBodyCells.set(this, row, columnIndex, this._column);
	}

	unset(forcibly?: boolean): void {
		this._row = undefined;
		this._rowIndex = -1;
		this._forcibly ||= forcibly;
	}

	protected getType(): string {
		return "DTableBodyCellInputTextArea";
	}
}
