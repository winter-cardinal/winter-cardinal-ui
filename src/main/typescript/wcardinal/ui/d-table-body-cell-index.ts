/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellIndexOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex
> extends DImageBaseOptions<number, THEME> {
}

export interface DThemeTableBodyCellIndex<VALUE = unknown> extends DThemeImageBase<number> {

}

export class DTableBodyCellIndex<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellIndex<VALUE> = DThemeTableBodyCellIndex<VALUE>,
	OPTIONS extends DTableBodyCellIndexOptions<ROW, VALUE, THEME> = DTableBodyCellIndexOptions<ROW, VALUE, THEME>
> extends DImageBase<number, THEME, OPTIONS> implements DTableBodyCell<ROW, VALUE> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW, VALUE>;
	protected _onChange: DTableBodyCellOnChange<ROW, VALUE>;

	constructor( columnIndex: number, column: DTableColumn<ROW, VALUE>, onChange: DTableBodyCellOnChange<ROW, unknown>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;
		this._onChange = onChange;
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

	get column(): DTableColumn<ROW, VALUE> {
		return this._column;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = rowIndex;

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellIndex";
	}
}
