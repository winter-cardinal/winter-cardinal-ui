/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { DImageBase, DImageBaseOptions, DThemeImageBase } from "./d-image-base";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellIndexOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex
> extends DImageBaseOptions<number, THEME> {
}

export interface DThemeTableBodyCellIndex extends DThemeImageBase {
	getTextFormatter(): ( value: number, caller: DTableBodyCellIndex ) => string;
	getTextValue( state: DBaseStateSet ): number;
	newTextValue(): number;
}

export class DTableBodyCellIndex<
	ROW = unknown,
	THEME extends DThemeTableBodyCellIndex = DThemeTableBodyCellIndex,
	OPTIONS extends DTableBodyCellIndexOptions<ROW, THEME> = DTableBodyCellIndexOptions<ROW, THEME>
> extends DImageBase<number, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _columnData: DTableColumn<ROW>;

	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._columnData = columnData;
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

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = rowIndex;

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellIndex";
	}
}
