/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogTime, DDialogTimeOptions } from "./d-dialog-time";
import { DPickerDatetimeMask } from "./d-picker-datetime-mask";
import { DPickerTimes } from "./d-picker-times";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";
import { utilIsNumber } from "./util/util-is-number";

export interface DTableBodyCellTimeOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime
> extends DButtonOptions<Date, THEME>, DTableBodyCellOptions<ROW> {
	dialog?: DDialogTimeOptions;
}

export interface DThemeTableBodyCellTime extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DTableBodyCellTime ) => string;
	getTextValue( state: DBaseState ): Date;
	newTextValue(): Date;
}

export class DTableBodyCellTime<
	ROW = unknown,
	THEME extends DThemeTableBodyCellTime = DThemeTableBodyCellTime,
	OPTIONS extends DTableBodyCellTimeOptions<ROW, THEME> = DTableBodyCellTimeOptions<ROW, THEME>
> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell {
	protected static DIALOG?: DDialogTime;
	protected _dialog?: DDialogTime;
	protected _dialogOptions?: DDialogTimeOptions;
	protected _datetimeMask!: DPickerDatetimeMask;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._dialogOptions = options.dialog;
		this._datetimeMask = DPickerTimes.toMask( options.dialog && options.dialog.picker );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;

		super.init( options );

		this.on( "active", (): void => {
			const currentTime = this._textValueComputed.getTime();
			const dialog = this.dialog;
			dialog.current = new Date( currentTime );
			dialog.new = new Date( currentTime );
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

	get dialog(): DDialogTime {
		let dialog = this._dialog;
		if( dialog == null ) {
			const dialogOptions = this._dialogOptions;
			if( dialogOptions != null ) {
				dialog = new DDialogTime( this._dialogOptions );
			} else {
				if( DTableBodyCellTime.DIALOG == null ) {
					DTableBodyCellTime.DIALOG = new DDialogTime();
				}
				dialog = DTableBodyCellTime.DIALOG;
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
		return "DTableBodyCellTime";
	}
}
