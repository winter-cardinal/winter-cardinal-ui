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
import { DTableColumn } from "./d-table-column";
import { utilIsNumber } from "./util/util-is-number";

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
> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell {
	protected static DIALOG?: DDialogDatetime;
	protected _dialog?: DDialogDatetime;
	protected _dialogOptions?: DDialogDatetimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._dialogOptions = options.dialog;
		this._datetimeMask = DPickerDatetimes.toMask( options && options.dialog && options.dialog.picker );
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
				const dialogNew = dialog.new;
				const dialogCurrent = dialog.current;
				this.text = new Date( dialogNew.getTime() );
				this.emit( "cellchange", dialogNew, dialogCurrent, this._columnIndex, this._columnData );
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

	set( value: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean ): void {
		if( value instanceof Date ) {
			if( forcibly ) {
				this._textValue = value;
				this._textValueComputed = value;
				this.onTextChange();
				this.createOrUpdateText();
			} else {
				this.text = value;
			}
		} else if( utilIsNumber( value ) ) {
			const textValueComputed = this._textValueComputed;
			if( textValueComputed.getTime() !== value ) {
				textValueComputed.setTime( value );
				this.onTextChange();
				this.createOrUpdateText();
			}
		}
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellDatetime";
	}
}
