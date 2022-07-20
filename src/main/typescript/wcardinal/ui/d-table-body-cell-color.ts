/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonColor, DButtonColorOptions, DThemeButtonColor } from "./d-button-color";
import { DColorAndAlpha } from "./d-color-and-alpha";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";
import { isString } from "./util/is-string";

export interface DTableBodyCellColorOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor
> extends DButtonColorOptions<THEME> {}

export interface DThemeTableBodyCellColor extends DThemeButtonColor {}

export class DTableBodyCellColor<
		ROW = unknown,
		THEME extends DThemeTableBodyCellColor = DThemeTableBodyCellColor,
		OPTIONS extends DTableBodyCellColorOptions<ROW, THEME> = DTableBodyCellColorOptions<
			ROW,
			THEME
		>
	>
	extends DButtonColor<THEME, OPTIONS>
	implements DTableBodyCell<ROW, DColorAndAlpha>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, DColorAndAlpha>;
	protected _onChange: DTableBodyCellOnChange<ROW, DColorAndAlpha>;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, DColorAndAlpha>,
		onChange: DTableBodyCellOnChange<ROW, DColorAndAlpha>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange(newValue: DColorAndAlpha, oldValue: DColorAndAlpha): void {
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

	get column(): DTableColumn<ROW, DColorAndAlpha> {
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
		const cell = this.value;
		if (isNumber(value)) {
			cell.color = value;
			cell.alpha = 1;
		} else if (isString(value)) {
			const parsed = Number(value);
			cell.color = parsed === parsed ? parsed : 0xffffff;
			cell.alpha = 1;
		} else if (value != null) {
			const color = (value as any).color;
			const alpha = (value as any).alpha;
			cell.color = isNumber(color) ? color : 0xffffff;
			cell.alpha = isNumber(alpha) ? alpha : 1;
		} else {
			cell.color = 0xffffff;
			cell.alpha = 1;
		}

		DTableBodyCells.set(this, row, columnIndex, this._column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellColor";
	}
}
