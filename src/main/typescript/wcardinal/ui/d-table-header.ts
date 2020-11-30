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
	update( forcibly?: boolean ): void;
}

export interface DTableHeaderTable<ROW> {
	readonly data: DTableData<ROW>;
	readonly body: DTableHeaderTableBody;
}

export interface DTableHeaderOptions<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader
> extends DTableRowOptions<ROW, DTableColumn<ROW>, THEME> {
	table?: DTableHeaderTable<ROW>;
	offset?: number;
	cell?: DTableHeaderCellOptions<ROW>;
}

export interface DThemeTableHeader extends DThemeTableRow {

}

export class DTableHeader<
	ROW,
	THEME extends DThemeTableHeader = DThemeTableHeader,
	OPTIONS extends DTableHeaderOptions<ROW, THEME> = DTableHeaderOptions<ROW, THEME>
> extends DTableRow<ROW, DTableColumn<ROW>, THEME, OPTIONS> {
	protected _table!: DTableHeaderTable<ROW> | null;
	protected _offset!: number;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._table = options.table || null;
		this._offset = this.transform.position.y = options.offset || 0;
		this._frozen = options.frozen ?? 0;
		super.init( options );
	}

	get table(): DTableHeaderTable<ROW> | null {
		return this._table;
	}

	protected onParentMove( newX: number, newY: number, oldX: number, oldY: number ): void {
		super.onParentMove( newX, newY, oldX, oldY );
		this.transform.position.y = -newY + this._offset;
		this.updateFrozenCellPosition( newX );
	}

	protected getContentPositionX(): number {
		const content = this.parent;
		if( content ) {
			return content.position.x;
		}
		return 0;
	}

	protected newCell(
		columnIndex: number,
		columnData: DTableColumn<ROW>,
		columnDataList: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase {
		return new DTableHeaderCell<ROW>( this.toCellOptions( columnIndex, columnData, options ) );
	}

	protected toCellOptions(
		columnIndex: number,
		columnData: DTableColumn<ROW>,
		options: OPTIONS
	): DTableHeaderCellOptions<ROW> {
		const result = columnData.header || options.cell;
		if( result != null ) {
			if( result.weight === undefined ) {
				result.weight = columnData.weight;
			}
			if( result.width === undefined ) {
				result.width = columnData.width;
			}
			if( result.text === undefined ) {
				result.text = {
					value: columnData.label
				};
			} else if( result.text.value === undefined ) {
				result.text.value = columnData.label;
			}
			if( result.header === undefined ) {
				result.header = this;
			}
			if( result.column === undefined ) {
				result.column = columnData;
			}
			if( result.columnIndex === undefined ) {
				result.columnIndex = columnIndex;
			}
			return result;
		} else {
			return {
				weight: columnData.weight,
				width: columnData.width,
				text: {
					value: columnData.label
				},
				header: this,
				column: columnData,
				columnIndex
			};
		}
	}

	protected getType(): string {
		return "DTableHeader";
	}
}
