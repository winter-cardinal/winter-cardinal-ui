/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
import { DTableData } from "./d-table-data";
import { DTableHeaderCell, DTableHeaderCellOptions } from "./d-table-header-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableHeaderTable<ROW> {
	readonly data: DTableData<ROW>;
}

export interface DTableHeaderOptions<ROW, THEME extends DThemeTableHeader = DThemeTableHeader>
	extends DTableRowOptions<ROW, THEME> {
	table: DTableHeaderTable<ROW>;
	cell?: DTableHeaderCellOptions<ROW>;
}

export interface DThemeTableHeader extends DThemeTableRow {

}

export class DTableHeader<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader,
	OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>
> extends DTableRow<ROW, THEME, OPTIONS> {
	protected _table!: DTableHeaderTable<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._table = options.table;
		super.init( options );
	}

	get table(): DTableHeaderTable<ROW> {
		return this._table;
	}

	onParentMove( x: number, y: number ): void {
		super.onParentMove( x, y );
		this.transform.position.y = -y;
	}

	protected newCell(
		column: DTableColumn<ROW>,
		columnIndex: number,
		columns: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase {
		return new DTableHeaderCell<ROW>( this.toCellOptions( column, options ) );
	}

	protected toCellOptions(
		column: DTableColumn<ROW>,
		options: OPTIONS
	): DTableHeaderCellOptions<ROW> {
		const header = column.header || options.cell;
		if( header != null ) {
			header.weight = column.weight;
			header.width = column.width;
			const text = header.text = header.text || {};
			text.value = text.value || column.label;
			header.column = column;
			header.header = this;
			return header;
		} else {
			return {
				weight: column.weight,
				width: column.width,
				text: {
					value: column.label
				},
				header: this,
				column
			};
		}
	}

	protected getType(): string {
		return "DTableHeader";
	}
}
