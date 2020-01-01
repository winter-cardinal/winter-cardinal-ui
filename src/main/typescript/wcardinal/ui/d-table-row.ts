/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";
import { DTableColumn } from "./d-table-column";

export interface DTableRowOptions<ROW, THEME extends DThemeTableRow = DThemeTableRow>
	extends DLayoutHorizontalOptions<THEME> {
	columns?: Array<DTableColumn<ROW>>;
}

export interface DThemeTableRow extends DThemeLayoutHorizontal {

}

export abstract class DTableRow<
	ROW,
	THEME extends DThemeTableRow = DThemeTableRow,
	OPTIONS extends DTableRowOptions<ROW, THEME> = DTableRowOptions<ROW, THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _columns!: Array<DTableColumn<ROW>>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );

		// Cells
		const columns = this._columns = options.columns || [];
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			this.addChild( this.newCell( columns[ i ], i, columns, options ) );
		}
	}

	protected abstract newCell(
		column: DTableColumn<ROW>,
		columnIndex: number,
		columns: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase;

	protected getType(): string {
		return "DTableRow";
	}
}
