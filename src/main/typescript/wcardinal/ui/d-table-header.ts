/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
import { DTableHeaderCell, DTableHeaderCellOptions } from "./d-table-header-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableHeaderOptions<ROW, THEME extends DThemeTableHeader = DThemeTableHeader>
	extends DTableRowOptions<ROW, THEME> {
	cell?: DTableHeaderCellOptions;
}

export interface DThemeTableHeader extends DThemeTableRow {

}

export class DTableHeader<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader,
	OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>
> extends DTableRow<ROW, THEME, OPTIONS> {
	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
	}

	protected newCell(
		column: DTableColumn<ROW>,
		columnIndex: number,
		columns: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase {
		return new DTableHeaderCell( this.toCellOptions( column, options ) );
	}

	protected toCellOptions(
		column: DTableColumn<ROW>,
		options: OPTIONS
	): DTableHeaderCellOptions {
		const header = column.header || options.cell;
		if( header != null ) {
			header.weight = column.weight;
			header.width = column.width;
			const text = header.text = header.text || {};
			text.value = text.value || column.label;
			return header;
		} else {
			return {
				weight: column.weight,
				width: column.width,
				text: {
					value: column.label
				}
			};
		}
	}

	protected getType(): string {
		return "DTableHeader";
	}
}
