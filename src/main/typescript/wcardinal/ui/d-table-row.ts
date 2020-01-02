/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DLayoutHorizontal, DLayoutHorizontalOptions, DThemeLayoutHorizontal } from "./d-layout-horizontal";

export interface DTableRowOptions<
	ROW,
	COLUMN,
	THEME extends DThemeTableRow = DThemeTableRow
> extends DLayoutHorizontalOptions<THEME> {
	columns?: COLUMN[];
}

export interface DThemeTableRow extends DThemeLayoutHorizontal {

}

export abstract class DTableRow<
	ROW,
	COLUMN,
	THEME extends DThemeTableRow = DThemeTableRow,
	OPTIONS extends DTableRowOptions<ROW, COLUMN, THEME> = DTableRowOptions<ROW, COLUMN, THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _columns!: COLUMN[];

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ): void {
		super.init( options );

		// Cells
		const columns = this._columns = options.columns || [];
		const iend = this.toIndexEnd( columns );
		for( let i = 0, imax = columns.length; i < imax; ++i ) {
			const cell = this.newCell( columns[ i ], i, columns, options );
			if( i === 0 ) {
				cell.setState( DBaseState.START, true );
			}
			if( i === iend ) {
				cell.setState( DBaseState.END, true );
			}
			this.addChild( cell );
		}
	}

	protected toIndexEnd( columns: COLUMN[] ): number {
		const imax = columns.length;
		for( let i = 0; i < imax; ++i ) {
			const column = columns[ i ];
			if( (column as any).weight !== undefined ) {
				return imax - 1;
			}
		}
		return imax;
	}

	protected abstract newCell(
		column: COLUMN,
		columnIndex: number,
		columns: COLUMN[],
		options: OPTIONS
	): DBase;

	protected getType(): string {
		return "DTableRow";
	}
}
