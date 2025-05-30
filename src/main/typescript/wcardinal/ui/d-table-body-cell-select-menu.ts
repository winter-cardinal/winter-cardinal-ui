/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMenuItem } from "./d-menu-item";
import { DSelect, DSelectOptions, DThemeSelect } from "./d-select";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { DTableDataSupplimental } from "./d-table-data";

export interface DTableBodyCellSelectMenuOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMenu<VALUE> = DThemeTableBodyCellSelectMenu<VALUE>
> extends DSelectOptions<VALUE, THEME> {}

export interface DThemeTableBodyCellSelectMenu<VALUE = unknown> extends DThemeSelect<VALUE> {}

export class DTableBodyCellSelectMenu<
		ROW = unknown,
		VALUE = unknown,
		THEME extends DThemeTableBodyCellSelectMenu<VALUE> = DThemeTableBodyCellSelectMenu<VALUE>,
		OPTIONS extends DTableBodyCellSelectMenuOptions<
			ROW,
			VALUE,
			THEME
		> = DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME>
	>
	extends DSelect<VALUE, THEME, OPTIONS>
	implements DTableBodyCell<ROW, VALUE | null>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, VALUE | null>;
	protected _onChange: DTableBodyCellOnChange<ROW, VALUE | null>;
	protected _forcibly?: boolean;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, VALUE | null>,
		onChange: DTableBodyCellOnChange<ROW, VALUE | null>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onValueChange(
		newValue: VALUE | null,
		oldValue: VALUE | null,
		item: DMenuItem<VALUE> | null
	): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const column = this._column;
			column.setter(row, columnIndex, newValue);
			super.onValueChange(newValue, oldValue, item);
			this._onChange(newValue, oldValue, row, rowIndex, columnIndex, column, this);
		}
	}

	protected onKeyDownArrowDown(e: KeyboardEvent): boolean {
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

	get column(): DTableColumn<ROW, VALUE | null> {
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
		this.setValue(value as VALUE | null, forcibly || this._forcibly);
		this._forcibly = undefined;

		DTableBodyCells.set(this, row, columnIndex, this._column);
	}

	unset(forcibly?: boolean): void {
		this._row = undefined;
		this._rowIndex = -1;
		this._forcibly ||= forcibly;
	}

	protected getType(): string {
		return "DTableBodyCellSelectMenu";
	}
}
