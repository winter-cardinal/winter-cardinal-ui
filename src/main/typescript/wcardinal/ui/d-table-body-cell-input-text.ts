/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputText, DInputTextOptions, DThemeInputText } from "./d-input-text";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputTextOptions<
	ROW = unknown,
	THEME extends DThemeInputText = DThemeInputText
> extends DInputTextOptions<THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellInputText extends DThemeInputText {

}

export class DTableBodyCellInputText<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputText = DThemeTableBodyCellInputText,
	OPTIONS extends DTableBodyCellInputTextOptions<ROW, THEME> = DTableBodyCellInputTextOptions<ROW, THEME>
> extends DInputText<THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;
		this.on( "change", ( newCellValue: unknown, oldCellValue: unknown ): void => {
			this.emit( "cellchange", newCellValue, oldCellValue, this._columnIndex, this._columnData );
		});
	}

	set( value: unknown ): void {
		this.text = String( value );
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellInputText";
	}
}
