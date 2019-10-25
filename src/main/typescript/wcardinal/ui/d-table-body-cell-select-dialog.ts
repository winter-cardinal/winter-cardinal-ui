/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButton, DButtonOptions, DThemeButton } from "./d-button";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellSelectDialogOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog
> extends DButtonOptions<VALUE, THEME>, DTableBodyCellOptions<ROW> {

}

export interface DThemeTableBodyCellSelectDialog extends DThemeButton {

}

export class DTableBodyCellSelectDialog<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellSelectDialog = DThemeTableBodyCellSelectDialog,
	OPTIONS extends DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME> =
		DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME>
> extends DButton<VALUE, THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		const column = options.column;
		this._columnIndex = column.index;
		this._columnData = column.data;
		const selecting = column.data.selecting;
		const dialog = selecting.dialog;
		if( dialog != null ) {
			const getter = selecting.getter;
			const onSelectBound = ( selected: VALUE | null ): void => {
				const newValue = getter( selected );
				const oldValue = this.text;
				if( newValue !== oldValue ) {
					this.text = newValue as VALUE;
					this.emit( "cellchange", newValue, oldValue, this._columnIndex, this._columnData );
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

	get value(): VALUE {
		return this.text as VALUE;
	}

	set value( value: VALUE ) {
		this.text = value;
	}

	set( value: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean ): void {
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
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellSelectDialog";
	}
}
