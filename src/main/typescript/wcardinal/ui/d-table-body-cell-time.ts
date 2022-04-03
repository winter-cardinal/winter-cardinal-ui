/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonTime, DButtonTimeOptions, DThemeButtonTime } from "./d-button-time";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";

export interface DTableBodyCellTimeOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime
> extends DButtonTimeOptions<THEME> {}

export interface DThemeTableBodyCellTime extends DThemeButtonTime {}

export class DTableBodyCellTime<
		ROW = unknown,
		THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime,
		OPTIONS extends DTableBodyCellTimeOptions<ROW, THEME> = DTableBodyCellTimeOptions<
			ROW,
			THEME
		>
	>
	extends DButtonTime<THEME, OPTIONS>
	implements DTableBodyCell<ROW, Date>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, Date>;
	protected _onChange: DTableBodyCellOnChange<ROW, Date>;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, Date>,
		onChange: DTableBodyCellOnChange<ROW, Date>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange(newValue: Date, oldValue: Date): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter(row, columnIndex, newValue);
			super.onValueChange(newValue, oldValue);
			this._onChange(newValue, oldValue, row, rowIndex, columnIndex, this);
		} else {
			super.onValueChange(newValue, oldValue);
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

	get column(): DTableColumn<ROW, Date> {
		return this._column;
	}

	set(
		value: Date,
		row: ROW,
		supplimental: unknown,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		if (value instanceof Date) {
			if (forcibly) {
				this._textValue = value;
				this._textValueComputed = value;
				this.onTextChange();
				this.createOrUpdateText();
			} else {
				this.text = value;
			}
		} else if (isNumber(value)) {
			const textValueComputed = this._textValueComputed;
			if (textValueComputed == null) {
				this.text = new Date(value);
			} else if (textValueComputed.getTime() !== value) {
				textValueComputed.setTime(value);
				this.onTextChange();
				this.createOrUpdateText();
			}
		}

		const column = this._column;
		DTableBodyCells.setReadOnly(this, row, columnIndex, column);
		DTableBodyCells.setRenderable(this, row, columnIndex, column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellTime";
	}
}
