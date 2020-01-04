/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableCategoryCell, DTableCategoryCellOptions } from "./d-table-category-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableCategoryColumn {
	label?: string;
	weight?: number;
	width?: number;
	offset: number;
}

export interface DTableCategoryOptions<
	THEME extends DThemeTableCategory = DThemeTableCategory
> extends DTableRowOptions<unknown, DTableCategoryColumn, THEME> {
	cell?: DTableCategoryCellOptions;
}

export interface DThemeTableCategory extends DThemeTableRow {

}

export class DTableCategory<
	THEME extends DThemeTableCategory = DThemeTableCategory,
	OPTIONS extends DTableCategoryOptions<THEME> = DTableCategoryOptions<THEME>
> extends DTableRow<unknown, DTableCategoryColumn, THEME, OPTIONS> {
	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		super.init( options );
	}

	onParentMove( x: number, y: number ): void {
		super.onParentMove( x, y );
		this.transform.position.y = -y;
		this.updateFrozenCellPosition( x );
	}

	protected getContentPositionX(): number {
		const content = this.parent;
		if( content ) {
			return content.position.x;
		}
		return 0;
	}

	protected newCell(
		column: DTableCategoryColumn,
		columnIndex: number,
		columns: DTableCategoryColumn[],
		options: OPTIONS
	): DBase {
		return new DTableCategoryCell( this.toCellOptions( column, options ) );
	}

	protected toCellOptions(
		column: DTableCategoryColumn,
		options: OPTIONS
	): DTableCategoryCellOptions {
		const result = options.cell;
		if( result ) {
			result.weight = column.weight;
			result.width = column.width;
			const text = result.text = result.text || {};
			text.value = text.value || column.label;
			return result;
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
		return "DTableCategory";
	}
}
