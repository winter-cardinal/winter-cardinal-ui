/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputTextOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText
> extends DInputTextOptions<THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellInputText extends DThemeInputText {

}

export class DTableBodyCellInputText<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText,
	OPTIONS extends DTableBodyCellInputTextOptions<ROW, THEME> = DTableBodyCellInputTextOptions<ROW, THEME>
> extends DInputText<THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		this._rowIndex = 0;
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;
		this.on( "change", ( newValue: unknown, oldValue: unknown ): void => {
			const row = this._row;
			if( row !== undefined ) {
				const rowIndex = this._rowIndex;
				const columnIndex = this._columnIndex;
				this._columnData.setter( row, columnIndex, newValue );
				this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
			}
		});
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.text = String( value );

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
	}

	protected getType(): string {
		return "DTableBodyCellInputText";
	}
}
