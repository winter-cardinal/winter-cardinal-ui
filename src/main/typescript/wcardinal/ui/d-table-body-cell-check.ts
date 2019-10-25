/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DButtonCheck, DButtonCheckOptions, DThemeButtonCheck } from "./d-button-check";
import { DTableBodyCell, DTableBodyCellOptions } from "./d-table-body-cell";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellCheckOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck
> extends DButtonCheckOptions<unknown, THEME>, DTableBodyCellOptions<ROW> {
}

export interface DThemeTableBodyCellCheck extends DThemeButtonCheck {

}

export class DTableBodyCellCheck<
	ROW = unknown,
	THEME extends DThemeTableBodyCellCheck = DThemeTableBodyCellCheck,
	OPTIONS extends DTableBodyCellCheckOptions<ROW, THEME> = DTableBodyCellCheckOptions<ROW, THEME>
> extends DButtonCheck<unknown, THEME, OPTIONS> implements DTableBodyCell {
	protected _columnIndex!: number;
	protected _columnData!: DTableColumn<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
		this._columnIndex = options.column.index;
		this._columnData = options.column.data;

		this.on( "active", (): void => {
			this.emit( "cellchange", true, false, this._columnIndex, this._columnData );
		});

		this.on( "inactive", (): void => {
			this.emit( "cellchange", false, true, this._columnIndex, this._columnData );
		});
	}

	set( value: unknown ): void {
		this.setActive( !! value );
	}

	unset(): void {
		// DO NOTHING
	}

	protected getType(): string {
		return "DTableBodyCellCheck";
	}
}
