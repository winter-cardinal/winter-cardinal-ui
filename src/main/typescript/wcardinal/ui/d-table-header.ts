/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
import { DTableData } from "./d-table-data";
import { DTableHeaderCell, DTableHeaderCellOptions } from "./d-table-header-cell";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableHeaderTableBody {
	update(forcibly?: boolean): void;
}

export interface DTableHeaderTable<ROW> {
	readonly data: DTableData<ROW>;
	readonly body: DTableHeaderTableBody;
}

export interface DTableHeaderOptions<ROW, THEME extends DThemeTableHeader = DThemeTableHeader>
	extends DTableRowOptions<ROW, DTableColumn<ROW, unknown>, THEME> {
	table?: DTableHeaderTable<ROW>;
	offset?: number;
	cell?: DTableHeaderCellOptions<ROW>;
}

export interface DThemeTableHeader extends DThemeTableRow {}

export class DTableHeader<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader,
	OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>
> extends DTableRow<ROW, DTableColumn<ROW, unknown>, THEME, OPTIONS> {
	protected _table: DTableHeaderTable<ROW> | null;
	protected _offset: number;

	constructor(options: OPTIONS) {
		super(options);

		this._table = options.table ?? null;

		const offset = options.offset ?? 0;
		this._offset = offset;
		this.transform.position.y = offset;

		this.initCells(options, this._columns, this._frozen);
	}

	get table(): DTableHeaderTable<ROW> | null {
		return this._table;
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
		column: DTableColumn<ROW, unknown>,
		columns: Array<DTableColumn<ROW, unknown>>,
		options: OPTIONS
	): DBase {
		const cell = new DTableHeaderCell<ROW>(this.toCellOptions(columnIndex, column, options));
		cell.on("resize", (newWidth: number, isWeight: boolean) => {
			this.emit("columnresize", columnIndex, newWidth, isWeight);
		});
		return cell;
	}

	protected toCellOptions(
		columnIndex: number,
		column: DTableColumn<ROW, unknown>,
		options: OPTIONS
	): DTableHeaderCellOptions<ROW> {
		const result = column.header || options.cell;
		if (result != null) {
			if (result.weight === undefined) {
				result.weight = column.weight;
			}
			if (result.width === undefined) {
				result.width = column.width;
			}
			if (result.text === undefined) {
				result.text = {
					value: column.label
				};
			} else if (result.text.value === undefined) {
				result.text.value = column.label;
			}
			if (result.header === undefined) {
				result.header = this;
			}
			if (result.column === undefined) {
				result.column = column;
			}
			if (result.columnIndex === undefined) {
				result.columnIndex = columnIndex;
			}
			return result;
		} else {
			return {
				weight: column.weight,
				width: column.width,
				text: {
					value: column.label
				},
				header: this,
				column,
				columnIndex
			};
		}
	}

	protected getType(): string {
		return "DTableHeader";
	}
}
