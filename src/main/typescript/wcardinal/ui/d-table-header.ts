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
	extends DTableRowOptions<THEME> {
	cell?: DTableHeaderCellOptions<ROW>;
}

export interface DThemeTableHeader extends DThemeTableRow {}

export class DTableHeader<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader,
	OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>
> extends DTableRow<ROW, DTableColumn<ROW>, THEME, OPTIONS> {
	protected _table: DTableHeaderTable<ROW>;
	protected _offset: number;
	declare children: DTableHeaderCell<ROW>[];

	constructor(
		table: DTableHeaderTable<ROW>,
		columns: DTableColumn<ROW>[],
		frozen: number,
		offset: number,
		options?: OPTIONS
	) {
		super(columns, frozen, options);

		this._table = table;

		this._offset = offset;
		this.transform.position.y = offset;

		this.initCells();
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
		column: DTableColumn<ROW>,
		columns: Array<DTableColumn<ROW>>,
		options?: OPTIONS
	): DBase {
		return new DTableHeaderCell<ROW>(
			this,
			columnIndex,
			column,
			this.toCellOptions(column, options)
		);
	}

	protected toCellOptions(
		column: DTableColumn<ROW>,
		options?: OPTIONS
	): DTableHeaderCellOptions<ROW> {
		const result = column.header || options?.cell;
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
		return "DTableHeader";
	}
}
