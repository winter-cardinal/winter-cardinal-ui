/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { DTableColumnType } from "./d-table-column-type";
import { DTableColumnUpdate } from "./d-table-column-update";
import type { DTableBody } from "./d-table-body";
import type { DTableBodyRow } from "./d-table-body-row";
import { DTableDataSupplimental } from "./d-table-data";

export interface DTableBodyCellCheckOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck
> extends DButtonCheckOptions<boolean, THEME> {}

export interface DThemeTableBodyCellCheck extends DThemeButtonCheck<boolean> {}

export class DTableBodyCellCheck<
		ROW = unknown,
		THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck,
		OPTIONS extends DTableBodyCellCheckOptions<ROW, THEME> = DTableBodyCellCheckOptions<
			ROW,
			THEME
		>
	>
	extends DButtonCheck<boolean, THEME, OPTIONS>
	implements DTableBodyCell<ROW, boolean>
{
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, boolean>;
	protected _onChange: DTableBodyCellOnChange<ROW, boolean>;

	constructor(
		columnIndex: number,
		column: DTableColumn<ROW, boolean>,
		onChange: DTableBodyCellOnChange<ROW, boolean>,
		options?: OPTIONS
	) {
		super(options);

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
	}

	protected onActivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onActivate(e);
		this.onValueChange(true, false);
	}

	protected onInactivate(
		e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): void {
		super.onInactivate(e);
		this.onValueChange(false, true);
	}

	protected onValueChange(newValue: boolean, oldValue: boolean): void {
		const row = this._row;
		if (row !== undefined) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const column = this._column;
			column.setter(row, columnIndex, newValue);
			this.emit("change", newValue, oldValue, this);
			const onChange = this._onChange;
			onChange(newValue, oldValue, row, rowIndex, columnIndex, column, this);
			if (newValue && column.type === DTableColumnType.CHECK_SINGLE) {
				this.onChangeSingle(rowIndex, columnIndex, column, onChange);
			}
		}
	}

	protected onChangeSingle(
		rowIndex: number,
		columnIndex: number,
		column: DTableColumn<ROW, boolean>,
		onChange: DTableBodyCellOnChange<ROW, boolean>
	): void {
		const tableBodyRow = this.parent as DTableBodyRow<ROW> | null;
		if (tableBodyRow != null) {
			const tableBody = tableBodyRow.parent as DTableBody<ROW> | null;
			if (tableBody != null) {
				let isChanged = false;
				const getter = column.getter;
				const setter = column.setter;
				const data = tableBody.data;
				data.each((row: ROW, index: number): boolean => {
					if (rowIndex !== index && getter(row, columnIndex)) {
						setter(row, columnIndex, false);
						isChanged = true;
						onChange(false, true, row, index, columnIndex, column, this);
						return false;
					}
					return true;
				});
				if (isChanged && column.update !== DTableColumnUpdate.ALL) {
					tableBody.update(true);
				}
			}
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

	get column(): DTableColumn<ROW, boolean> {
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
		this.state.isActive = !!value;

		DTableBodyCells.set(this, row, columnIndex, this._column);
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellCheck";
	}
}
