/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDropdown, DDropdownOptions, DThemeDropdown } from "./d-dropdown";
import { DMenu } from "./d-menu";
import { DMenuItem } from "./d-menu-item";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellActionMenuOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu
> extends DDropdownOptions<VALUE, THEME> {}

export interface DThemeTableBodyCellActionMenu extends DThemeDropdown {}

export class DTableBodyCellActionMenu<
		ROW = unknown,
		VALUE = unknown,
		THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu,
		OPTIONS extends DTableBodyCellActionMenuOptions<
			ROW,
			VALUE,
			THEME
		> = DTableBodyCellActionMenuOptions<ROW, VALUE, THEME>
	>
	extends DDropdown<VALUE, THEME, OPTIONS>
	implements DTableBodyCell<ROW, VALUE | null> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, VALUE | null>;
	protected _onChange: DTableBodyCellOnChange<ROW, VALUE | null>;

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

	protected onMenuSelect(selected: VALUE, item: DMenuItem<VALUE>, menu: DMenu<VALUE>): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter(row, columnIndex, selected);
			super.onMenuSelect(selected, item, menu);
			this._onChange(selected, null, row, rowIndex, columnIndex, this);
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
		supplimental: unknown,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = value as string | undefined;

		const column = this._column;
		DTableBodyCells.setReadOnly(this, row, columnIndex, column);
		DTableBodyCells.setRenderable(this, row, columnIndex, column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellActionMenu";
	}
}
