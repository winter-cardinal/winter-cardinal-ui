/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputInteger, DInputIntegerOptions, DThemeInputInteger } from "./d-input-integer";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputIntegerOptions<
	ROW = unknown,
	THEME extends DThemeInputInteger = DThemeInputInteger
> extends DInputIntegerOptions<THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellInputInteger extends DThemeInputInteger {

}

export class DTableBodyCellInputInteger<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputInteger = DThemeTableBodyCellInputInteger,
	OPTIONS extends DTableBodyCellInputIntegerOptions<ROW, THEME> = DTableBodyCellInputIntegerOptions<ROW, THEME>
> extends DInputInteger<THEME, OPTIONS> implements DTableBodyCell {
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
		this.text = Number( value );
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellInputInteger";
	}
}
