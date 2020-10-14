/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn, DTableColumnType } from "./d-table-column";
import { DTableData } from "./d-table-data";

export interface DTableBodyCellCheckOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck
> extends DButtonCheckOptions<unknown, THEME> {
}

export interface DThemeTableBodyCellCheck extends DThemeButtonCheck {

}

export class DTableBodyCellCheck<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck,
	OPTIONS extends DTableBodyCellCheckOptions<ROW, THEME> = DTableBodyCellCheckOptions<ROW, THEME>
> extends DButtonCheck<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _columnData: DTableColumn<ROW>;

	constructor( columnIndex: number, columnData: DTableColumn<ROW>, options: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._columnData = columnData;

		this.on( "active", (): void => {
			this.onChange( true );
		});

		this.on( "inactive", (): void => {
			this.onChange( false );
		});
	}

	protected onChangeSingle( rowIndex: number, columnIndex: number, columnData: DTableColumn<ROW> ) {
		const tableBodyRow = this.parent;
		if( tableBodyRow ) {
			const tableBody = tableBodyRow.parent as any;
			if( tableBody ) {
				let isChanged = false;
				const getter = columnData.getter;
				const setter = columnData.setter;
				const data = tableBody.data as DTableData<ROW>;
				data.each(( row: ROW, index: number ): boolean => {
					if( rowIndex !== index && getter( row, columnIndex ) ) {
						setter( row, columnIndex, false );
						isChanged = true;
						this.emit( "cellchange", false, true, row, index, columnIndex, this );
						return false;
					}
					return true;
				});
				if( isChanged ) {
					tableBody.update( true );
				}
			}
		}
	}

	protected onChange( newValue: boolean ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const columnData = this._columnData;
			columnData.setter( row, columnIndex, newValue );
			this.emit( "cellchange", newValue, ! newValue, row, rowIndex, columnIndex, this );
			if( newValue && columnData.type === DTableColumnType.CHECK_SINGLE ) {
				this.onChangeSingle( rowIndex, columnIndex, columnData );
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

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.state.isActive = !! value;

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellCheck";
	}
}
