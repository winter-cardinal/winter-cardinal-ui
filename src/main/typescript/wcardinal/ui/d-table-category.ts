/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableCategoryCell, DTableCategoryCellOptions } from "./d-table-category-cell";
import { DTableCategoryColumn } from "./d-table-category-column";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableCategoryOptions<THEME extends DThemeTableCategory = DThemeTableCategory>
	extends DTableRowOptions<THEME> {
	cell?: DTableCategoryCellOptions;
}

export interface DThemeTableCategory extends DThemeTableRow {}

export class DTableCategory<
	THEME extends DThemeTableCategory = DThemeTableCategory,
	OPTIONS extends DTableCategoryOptions<THEME> = DTableCategoryOptions<THEME>
> extends DTableRow<unknown, DTableCategoryColumn, THEME, OPTIONS> {
	protected _columns: DTableCategoryColumn[];
	protected _frozen: number;
	protected _offset: number;

	constructor(
		columns: DTableCategoryColumn[],
		frozen: number,
		offset: number,
		options?: OPTIONS
	) {
		super(columns, frozen, options);

		this._columns = columns;
		this._frozen = frozen;
		this._offset = offset;
		this.transform.position.y = offset;

		this.initCells();
	}

	protected onParentMove(newX: number, newY: number, oldX: number, oldY: number): void {
		super.onParentMove(newX, newY, oldX, oldY);
		this.transform.position.y = -newY + this._offset;
		this.updateFrozenCellPosition(newX);
	}

	protected getContentPositionX(): number {
		const content = this.parent;
		if (content) {
			return content.position.x;
		}
		return 0;
	}

	protected newCell(
		columnIndex: number,
		column: DTableCategoryColumn,
		columns: DTableCategoryColumn[],
		options: OPTIONS
	): DBase {
		return new DTableCategoryCell(this.toCellOptions(columnIndex, column, options));
	}

	protected toCellOptions(
		columnIndex: number,
		column: DTableCategoryColumn,
		options: OPTIONS
	): DTableCategoryCellOptions {
		const result = options.cell;
		if (result) {
			result.weight = column.weight;
			result.width = column.width;
			const text = result.text || {};
			result.text = text;
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
