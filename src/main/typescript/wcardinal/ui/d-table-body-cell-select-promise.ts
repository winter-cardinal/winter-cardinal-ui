/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCells } from "./d-table-body-cells";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectPromiseOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectPromise = DThemeTableBodyCellSelectPromise
> extends DButtonOptions<VALUE | null, THEME> {
	/**
	 * False to stop synchronizing the resolved value and the text.
	 */
	sync?: boolean;
}

export interface DThemeTableBodyCellSelectPromise extends DThemeButton {
	isSyncEnabled(): boolean;
}

export class DTableBodyCellSelectPromise<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectPromise = DThemeTableBodyCellSelectPromise,
	OPTIONS extends DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME> =
		DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME>
> extends DButton<VALUE | null, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex: number;
	protected _columnIndex: number;
	protected _column: DTableColumn<ROW>;

	constructor( columnIndex: number, column: DTableColumn<ROW>, options?: OPTIONS ) {
		super( options );

		this._rowIndex = -1;
		this._columnIndex = columnIndex;
		this._column = column;

		const isSyncEnabled = this.toSync( this.theme, options );
		const selecting = column.selecting;
		const promise = selecting.promise;
		if( promise != null ) {
			this.on( "active", (): void => {
				promise().then(( newValue: unknown ): void => {
					if( isSyncEnabled ) {
						const oldValue = this.text;
						if( newValue !== oldValue ) {
							this.text = newValue as VALUE;
							this.onCellChange( newValue, oldValue );
						}
					} else {
						this.onCellChange( newValue, null );
					}
				});
			});
		}
	}

	protected onCellChange( newValue: unknown, oldValue: unknown ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._column.setter( row, columnIndex, newValue );
			this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
		}
	}

	protected toSync( theme: THEME, options?: OPTIONS ): boolean {
		return options?.sync ?? theme.isSyncEnabled();
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

	get value(): VALUE | null {
		return this._textValueComputed;
	}

	set value( value: VALUE | null ) {
		this.text = value;
	}

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void {
		this._row = row;
		this._rowIndex = rowIndex;
		if( forcibly ) {
			this._textValue = value as VALUE;
			this._textValueComputed = value as VALUE;
			this.onTextChange();
			this.createOrUpdateText();
		} else {
			this.text = value as VALUE;
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
		return "DTableBodyCellSelectPromise";
	}
}
