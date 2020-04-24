/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDatetime, DDialogDatetimeOptions } from "./d-dialog-datetime";
import { DDialogDatetimes } from "./d-dialog-datetimes";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerDatetimes } from "./d-picker-datetimes";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";

export interface DTableBodyCellDatetimeOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellDatetime = DThemeTableBodyCellDatetime
> extends DButtonOptions<Date, THEME>, DTableBodyCellOptions<ROW> {
	dialog?: DDialogDatetimeOptions;
}

export interface DThemeTableBodyCellDatetime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DTableBodyCellDatetime ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

export class DTableBodyCellDatetime<
	ROW = unknown,
	THEME extends DThemeTableBodyCellDatetime = DThemeTableBodyCellDatetime,
	OPTIONS extends DTableBodyCellDatetimeOptions<ROW, THEME> = DTableBodyCellDatetimeOptions<ROW, THEME>
> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected static DIALOG?: DDialogDatetime;
	protected _dialog?: DDialogDatetime;
	protected _dialogOptions?: DDialogDatetimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._dialogOptions = options.dialog;
		this._datetimeMask = DPickerDatetimes.toMask( options && options.dialog && options.dialog.picker );
		this._rowIndex = -1;
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;

		super.init( options );

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed.getTime();
			const dialog = this.dialog;
			dialog.current = new Date( currentTime );
			dialog.new = new Date( currentTime );
			dialog.page = new Date( currentTime );
			dialog.open().then((): void => {
				const newValue = dialog.new;
				const oldValue = dialog.current;
				this.text = new Date( newValue.getTime() );
				const row = this._row;
				if( row !== undefined ) {
					const rowIndex = this._rowIndex;
					const columnIndex = this._columnIndex;
					this._columnData.setter( row, columnIndex, newValue );
					this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
				}
			});
		});
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	getDatetimeMask(): DPickerDatetimeMask {
		return this._datetimeMask;
	}

	get dialog(): DDialogDatetime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogDatetime( this._dialogOptions );
			} else {
				dialog = DDialogDatetimes.getInstance();
			}
			this._dialog = dialog;
		}
		return dialog;
	}

	get row(): ROW | undefined {
		return this._row;
	}

	get rowIndex(): number {
		return this._rowIndex;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		if( value instanceof Date ) {
			if( forcibly ) {
				this._textValue = value;
				this._textValueComputed = value;
				this.onTextChange();
				this.createOrUpdateText();
			} else {
				this.text = value;
			}
		} else if( isNumber( value ) ) {
			const textValueComputed = this._textValueComputed;
			if( textValueComputed.getTime() !== value ) {
				textValueComputed.setTime( value );
				this.onTextChange();
				this.createOrUpdateText();
			}
		}

		const columnData = this._columnData;
		DTableBodyCells.setReadOnly( this, row, columnIndex, columnData );
		DTableBodyCells.setRenderable( this, row, columnIndex, columnData );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellDatetime";
	}
}
