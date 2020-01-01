/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCellCheck } from "./d-table-body-cell-check";
import { DTableBodyCellColor } from "./d-table-body-cell-color";
import { DTableBodyCellDate } from "./d-table-body-cell-date";
import { DTableBodyCellDatetime } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndex } from "./d-table-body-cell-index";
import { DTableBodyCellInputInteger } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputReal } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputText } from "./d-table-body-cell-input-text";
import { DTableBodyCellSelectDialog } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectFetcher } from "./d-table-body-cell-select-fetcher";
import { DTableBodyCellSelectMenu } from "./d-table-body-cell-select-menu";
import { DTableBodyCellText } from "./d-table-body-cell-text";
import { DTableBodyCellTime } from "./d-table-body-cell-time";
import {
	DTableBodyCellOptionsMerged, DTableBodyCellOptionsUnion,
	DTableColumn, DTableColumnType
} from "./d-table-column";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableBodyRowOptions<ROW, THEME extends DThemeTableBodyRow = DThemeTableBodyRow>
	extends DTableRowOptions<ROW, THEME> {
	height?: number;
	cell?: DTableBodyCellOptionsUnion<ROW>;
}

export interface DThemeTableBodyRow extends DThemeTableRow {

}

const isBodyCell = ( target: any ): target is DTableBodyCell => {
	return (target != null && "set" in target);
};

type OnCellChange = (
	newCellValue: unknown, oldCellValue: unknown,
	columnIndex: number, column: DTableColumn<unknown>
) => void;

export class DTableBodyRow<
	ROW,
	THEME extends DThemeTableBodyRow = DThemeTableBodyRow,
	OPTIONS extends DTableBodyRowOptions<ROW, THEME> = DTableBodyRowOptions<ROW, THEME>
> extends DTableRow<ROW, THEME, OPTIONS> {
	protected _row: ROW | undefined = undefined;
	protected _onCellChangeBound!: OnCellChange;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._onCellChangeBound = (
			newCellValue: unknown, oldCellValue: unknown,
			columnIndex: number, column: DTableColumn<unknown>
		): void => {
			const row = this._row;
			if( row != null ) {
				column.setter( row, columnIndex, newCellValue );
				this.emit( "change", newCellValue, oldCellValue, columnIndex, this );
			}
		};
		super.init( options );
	}

	protected newCell(
		column: DTableColumn<ROW>,
		columnIndex: number,
		columns: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase {
		const cellOptions = this.toCellOptions( column, columnIndex, options ) as any;
		if( column.editing.enable ) {
			const cell = this.newCellEditable( column, columnIndex, cellOptions );
			cell.on( "cellchange", this._onCellChangeBound );
			return cell;
		} else {
			const cell = this.newCellUnediable( column, columnIndex, cellOptions );
			cell.setReadOnly( true );
			return cell;
		}
	}

	protected newCellEditable(
		column: DTableColumn<ROW>,
		columnIndex: number,
		options: any
	): DBase {
		switch( column.type ) {
		case DTableColumnType.INDEX:
			return new DTableBodyCellIndex( options );
		case DTableColumnType.TEXT:
			return new DTableBodyCellInputText( options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellInputInteger( options );
		case DTableColumnType.REAL:
			return new DTableBodyCellInputReal( options );
		case DTableColumnType.CHECK:
			return new DTableBodyCellCheck( options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellText( options );
		case DTableColumnType.SELECT:
			const selecting = column.selecting;
			if( selecting.menu != null ) {
				return new DTableBodyCellSelectMenu( options );
			} else if( selecting.dialog != null ) {
				return new DTableBodyCellSelectDialog( options );
			} else if( selecting.fetcher != null ) {
				return new DTableBodyCellSelectFetcher( options );
			} else {
				return new DTableBodyCellText( options );
			}
		case DTableColumnType.DATE:
			return new DTableBodyCellDate( options );
		case DTableColumnType.DATETIME:
			return new DTableBodyCellDatetime( options );
		case DTableColumnType.TIME:
			return new DTableBodyCellTime( options );
		default:
			return new DTableBodyCellText( options );
		}
	}
	protected newCellUnediable(
		column: DTableColumn<ROW>,
		columnIndex: number,
		options: any
	): DBase {
		switch( column.type ) {
		case DTableColumnType.INDEX:
			return new DTableBodyCellIndex( options );
		case DTableColumnType.TEXT:
			return new DTableBodyCellText( options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellText( options );
		case DTableColumnType.REAL:
			return new DTableBodyCellText( options );
		case DTableColumnType.CHECK:
			return new DTableBodyCellCheck( options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellText( options );
		case DTableColumnType.SELECT:
			const selecting = column.selecting;
			if( selecting.menu != null ) {
				return new DTableBodyCellSelectMenu( options );
			} else if( selecting.dialog != null ) {
				return new DTableBodyCellSelectDialog( options );
			} else if( selecting.fetcher != null ) {
				return new DTableBodyCellSelectFetcher( options );
			} else {
				return new DTableBodyCellText( options );
			}
		case DTableColumnType.DATE:
			return new DTableBodyCellDate( options );
		case DTableColumnType.DATETIME:
			return new DTableBodyCellDatetime( options );
		case DTableColumnType.TIME:
			return new DTableBodyCellTime( options );
		default:
			return new DTableBodyCellText( options );
		}
	}

	protected toCellOptions(
		column: DTableColumn<ROW>,
		columnIndex: number,
		options: OPTIONS
	): DTableBodyCellOptionsUnion<ROW> {
		let result = (column.body || options.cell) as DTableBodyCellOptionsMerged<ROW> | undefined;
		if( result != null ) {
			result.weight = column.weight;
			result.width = column.width;
			const text = result.text = result.text || {};
			const align = text.align = text.align || {};
			align.horizontal = column.align;
			text.formatter = column.formatter;
			result.column = {
				index: columnIndex,
				data: column
			};
			if( column.selecting.menu ) {
				result.menu = column.selecting.menu;
			}
		} else {
			result = {
				weight: column.weight,
				width: column.width,
				text: {
					formatter: column.formatter,
					align: {
						horizontal: column.align
					}
				},
				column: {
					index: columnIndex,
					data: column
				},
				menu: column.selecting.menu
			};
		}

		if( column.editing.enable ) {
			const editing = result!.editing = result!.editing || {};
			editing.formatter = editing.formatter || column.editing.formatter;
			editing.unformatter = editing.unformatter || column.editing.unformatter as any;
			editing.validator = editing.validator || column.editing.validator as any;
		}

		return result;
	}

	protected getType(): string {
		return "DTableBodyRow";
	}

	set( row: ROW, rowIndex: number, forcibly?: boolean ): void {
		if( forcibly || this._row !== row ) {
			this._row = row;

			const cells = this.children;
			const cellsLength = cells.length;
			const columns = this._columns;
			const columnsLength = columns.length;
			for( let i = 0, imax = Math.min( columnsLength, cellsLength ); i < imax; ++i ) {
				const cell = cells[ cellsLength - i - 1 ];
				const columnIndex = columnsLength - i - 1;
				const column = columns[ columnIndex ];
				if( isBodyCell( cell ) ) {
					cell.set( column.getter( row, columnIndex ), rowIndex, columnIndex, forcibly );
				}
			}

			this.emit( "set", row, rowIndex, this );
		}
	}

	unset(): void {
		if( this._row !== undefined ) {
			this._row = undefined;

			const cells = this.children;
			for( let i = 0, imax = cells.length; i < imax; ++i ) {
				const cell = cells[ i ];
				if( isBodyCell( cell ) ) {
					cell.unset();
				}
			}

			this.emit( "unset", this );
		}
	}
}
