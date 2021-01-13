/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DDialogDate, DDialogDateOptions } from "./d-dialog-date";
import { DDialogDates } from "./d-dialog-dates";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";
import { isNumber } from "./util/is-number";

export interface DTableBodyCellDateOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellDate = DThemeTableBodyCellDate
> extends DButtonOptions<Date, THEME> {
	dialog?: DDialogDateOptions;
}

export interface DThemeTableBodyCellDate extends DThemeButton {
	getTextFormatter(): ( value: Date, caller: DTableBodyCellDate ) => string;
	getTextValue( state: DBaseStateSet ): Date;
	newTextValue(): Date;
}

export class DTableBodyCellDate<
	ROW = unknown,
	THEME extends DThemeTableBodyCellDate = DThemeTableBodyCellDate,
	OPTIONS extends DTableBodyCellDateOptions<ROW, THEME> = DTableBodyCellDateOptions<ROW, THEME>
> extends DButton<Date, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _dialog?: DDialogDate;
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW>;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;

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
					this._column.setter( row, columnIndex, newValue );
					this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
				}
			});
		});
	}

	get dialog(): DDialogDate {
		let dialog = this._dialog;
		if( dialog == null ) {
			const options = this._options?.dialog;
			if( options ) {
				dialog = new DDialogDate( options );
			} else {
				dialog = DDialogDates.getInstance();
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

		const column = this._column;
		DTableBodyCells.setReadOnly( this, row, columnIndex, column );
		DTableBodyCells.setRenderable( this, row, columnIndex, column );
	}

	unset(): void {
		this._row = undefined;
		this._rowIndex = -1;
	}

	protected getType(): string {
		return "DTableBodyCellDate";
	}
}
