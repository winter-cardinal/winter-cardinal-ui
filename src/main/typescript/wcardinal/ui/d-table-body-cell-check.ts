/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellCheckOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck
> extends DButtonCheckOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellCheck extends DThemeButtonCheck {

}

export class DTableBodyCellCheck<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck,
	OPTIONS extends DTableBodyCellCheckOptions<ROW, THEME> = DTableBodyCellCheckOptions<ROW, THEME>
> extends DButtonCheck<unknown, THEME, OPTIONS> implements DTableBodyCell<ROW> {
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

		this.on( "active", (): void => {
			this.onChange( true );
		});

		this.on( "inactive", (): void => {
			this.onChange( false );
		});
	}

	protected onChange( newValue: boolean ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			const columnData = this._columnData;
			columnData.setter( row, columnIndex, newValue );
			this.emit( "cellchange", newValue, ! newValue, row, rowIndex, columnIndex, this );
		}
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	set( value: unknown, row: ROW, rowIndex: number ): void {
		this._row = row;
		this._rowIndex = rowIndex;
		this.setActive( !! value );
	}

	unset(): void {
		this._row = undefined;
	}

	protected getType(): string {
		return "DTableBodyCellCheck";
	}
}
