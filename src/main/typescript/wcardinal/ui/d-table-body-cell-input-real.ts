/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DInputReal, DInputRealOptions, DThemeInputReal } from "./d-input-real";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellInputRealOptions<
	ROW = unknown,
	THEME extends DThemeInputReal = DThemeInputReal
> extends DInputRealOptions<THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellInputReal extends DThemeInputReal {

}

export class DTableBodyCellInputReal<
	ROW = unknown,
	THEME extends DThemeTableBodyCellInputReal = DThemeTableBodyCellInputReal,
	OPTIONS extends DTableBodyCellInputRealOptions<ROW, THEME> = DTableBodyCellInputRealOptions<ROW, THEME>
> extends DInputReal<THEME, OPTIONS> implements DTableBodyCell {
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
		return "DTableBodyCellInputReal";
	}
}
