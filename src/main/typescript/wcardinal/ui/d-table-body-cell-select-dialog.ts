/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "./d-base-state";
import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectDialogOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog
> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {
	/**
	 * False to stop synchronization of the selected value and the text.
	 */
	sync?: boolean;
}

export interface DThemeTableBodyCellSelectDialog extends DThemeButton {
	isSyncEnabled(): boolean;
}

export class DTableBodyCellSelectDialog<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog,
	OPTIONS extends DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME> =
		DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME>
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
		const dialog = selecting.dialog;
		if( dialog != null ) {
			const getter = selecting.getter;
			const onSelectBound = ( selected: unknown ): void => {
				const newValue = getter( selected );
				const oldValue = this.text;
				if( newValue !== oldValue ) {
					if( this._isSyncEnabled ) {
						this.text = newValue as VALUE;
					}
					const row = this._row;
					if( row !== undefined ) {
						const rowIndex = this._rowIndex;
						const columnIndex = this._columnIndex;
						this._columnData.setter( row, rowIndex, newValue );
						this.emit( "cellchange", newValue, oldValue, row, rowIndex, columnIndex, this );
					}
				}
			};
			const onCloseBound = (): void => {
				dialog.off( "select", onSelectBound );
				dialog.off( "close", onCloseBound );
			};
			this.on( "active", (): void => {
				dialog.on( "select", onSelectBound );
				dialog.on( "close", onCloseBound );
				dialog.open();
			});
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
		return this.text as VALUE;
	}

	set value( value: VALUE ) {
		this.text = value;
	}

	set( value: unknown, row: ROW, rowIndex: number, columnIndex: number, forcibly?: boolean ): void {
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
		return "DTableBodyCellSelectDialog";
	}
}
