/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DSelect, DSelectOptions, DThemeSelect } from "./d-select";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectMenuOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMenu<VALUE> = DThemeTableBodyCellSelectMenu<VALUE>
> extends DSelectOptions<VALUE, THEME> {

}

export interface DThemeTableBodyCellSelectMenu<VALUE = unknown> extends DThemeSelect<VALUE> {

}

export class DTableBodyCellSelectMenu<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectMenu<VALUE> = DThemeTableBodyCellSelectMenu<VALUE>,
	OPTIONS extends DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME> = DTableBodyCellSelectMenuOptions<ROW, VALUE, THEME>
> extends DSelect<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _column!: DTableColumn<ROW>;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;

		this.on( "change", ( newValue: unknown, oldValue: unknown ): void => {
			const row = this._row;
			if( row !== undefined ) {
				const rowIndex = this._rowIndex;
				this._column.setter( row, columnIndex, newValue );
				this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
			}
		});
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

	get column(): DTableColumn<ROW> {
		return this._column;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.value = value as VALUE;

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellSelectMenu";
	}
}
