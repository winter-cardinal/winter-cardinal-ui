/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectPromiseOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectPromise = DThemeTableBodyCellSelectPromise
> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
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
> extends DButton<VALUE, THEME, OPTIONS> implements DTableBodyCell<ROW> {
	protected _row?: ROW;
	protected _rowIndex!: number;
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;
	protected _isSyncEnabled!: boolean;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		const column = options.column;
		this._rowIndex = 0;
		this._columnIndex = column.index;
		this._columnData = column.data;
		this._isSyncEnabled = this.toSync( this.theme, options );
		const selecting = column.data.selecting;
		const promise = selecting.promise;
		if( promise != null ) {
			const getter = selecting.getter;
			const onSelectBound = ( selected: unknown ): void => {
				const newValue = getter( selected );
				if( this._isSyncEnabled ) {
					const oldValue = this.text;
					if( newValue !== oldValue ) {
						this.text = newValue as VALUE;
						this.onCellChange( newValue, oldValue );
					}
				} else {
					this.onCellChange( newValue, null );
				}
			};
			this.on( "active", (): void => {
				promise().then( onSelectBound );
			});
		}
	}

	protected onCellChange( newValue: unknown, oldValue: unknown ): void {
		const row = this._row;
		if( row !== undefined ) {
			const rowIndex = this._rowIndex;
			const columnIndex = this._columnIndex;
			this._columnData.setter( row, columnIndex, newValue );
			this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
		}
	}

	protected toSync( theme: THEME, options: OPTIONS ): boolean {
		return ( options && options.sync != null ? options.sync : theme.isSyncEnabled() );
	}

	protected mergeState( stateLocal: DBaseState, stateParent: DBaseState ): DBaseState {
		return super.mergeState( stateLocal, stateParent ) |
			( stateParent & DBaseState.HOVERED ? DBaseState.HOVERED : DBaseState.NONE );
	}

	get value(): VALUE {
		return this._textValueComputed;
	}

	set value( value: VALUE ) {
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
	}

	unset(): void {
		this._row = undefined;
	}

	protected getType(): string {
		return "DTableBodyCellSelectPromise";
	}
}
