/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableBodyCellActionDialog } from "./d-table-body-cell-action-dialog";
import { DTableBodyCellActionMenu } from "./d-table-body-cell-action-menu";
import { DTableBodyCellActionPromise } from "./d-table-body-cell-action-promise";
import { DTableBodyCellButton } from "./d-table-body-cell-button";
import { DTableBodyCellCheck } from "./d-table-body-cell-check";
import { DTableBodyCellColor } from "./d-table-body-cell-color";
import { DTableBodyCellDate } from "./d-table-body-cell-date";
import { DTableBodyCellDatetime } from "./d-table-body-cell-datetime";
import { DTableBodyCellIndex } from "./d-table-body-cell-index";
import { DTableBodyCellInputInteger } from "./d-table-body-cell-input-integer";
import { DTableBodyCellInputReal } from "./d-table-body-cell-input-real";
import { DTableBodyCellInputText } from "./d-table-body-cell-input-text";
import { DTableBodyCellInputTree } from "./d-table-body-cell-input-tree";
import { DTableBodyCellLink } from "./d-table-body-cell-link";
import { DTableBodyCellSelectDialog } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectMenu } from "./d-table-body-cell-select-menu";
import { DTableBodyCellSelectMultiple } from "./d-table-body-cell-select-multiple";
import { DTableBodyCellSelectPromise } from "./d-table-body-cell-select-promise";
import { DTableBodyCellText } from "./d-table-body-cell-text";
import { DTableBodyCellTime } from "./d-table-body-cell-time";
import { DTableBodyCellTree } from "./d-table-body-cell-tree";
import {
	DTableBodyCellOptionsMerged, DTableBodyCellOptionsUnion,
	DTableColumn, DTableColumnType
} from "./d-table-column";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";

export interface DTableBodyRowOptions<
	ROW,
	THEME extends DThemeTableBodyRow = DThemeTableBodyRow
> extends DTableRowOptions<ROW, DTableColumn<ROW>, THEME> {
	height?: number;
	cell?: Partial<DTableBodyCellOptionsMerged<ROW>>;
}

export interface DThemeTableBodyRow extends DThemeTableRow {

}

const isBodyCell = <T>( target: T ): target is T & DTableBodyCell<unknown> => {
	return (target != null && "set" in target);
};

type OnCellChange<ROW> = (
	newValue: unknown, oldValue: unknown,
	row: ROW, rowIndex: number, columnIndex: number
) => void;

export class DTableBodyRow<
	ROW,
	THEME extends DThemeTableBodyRow = DThemeTableBodyRow,
	OPTIONS extends DTableBodyRowOptions<ROW, THEME> = DTableBodyRowOptions<ROW, THEME>
> extends DTableRow<ROW, DTableColumn<ROW>, THEME, OPTIONS> {
	protected _row: ROW | undefined = undefined;
	protected _onCellChangeBound!: OnCellChange<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
	}

	protected init( options: OPTIONS ) {
		this._onCellChangeBound = ( newValue, oldValue, row, rowIndex, columnIndex ): void => {
			this.emit( "rowchange", newValue, oldValue, row, rowIndex, columnIndex, this );
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
		if( column.editing.enable !== false ) {
			const cell = this.newCellEditable( column, columnIndex, cellOptions );
			cell.on( "cellchange", this._onCellChangeBound );
			return cell;
		} else {
			const cell = this.newCellUnediable( column, columnIndex, cellOptions );
			if( column.type === DTableColumnType.TREE ) {
				cell.on( "cellchange", this._onCellChangeBound );
			} else {
				cell.setReadOnly( true );
			}
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
		case DTableColumnType.TREE:
			return new DTableBodyCellInputTree( options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellInputInteger( options );
		case DTableColumnType.REAL:
			return new DTableBodyCellInputReal( options );
		case DTableColumnType.CHECK:
		case DTableColumnType.CHECK_SINGLE:
			return new DTableBodyCellCheck( options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellButton( options );
		case DTableColumnType.LINK:
			return new DTableBodyCellLink( options );
		case DTableColumnType.SELECT:
			return this.newCellSelect( column, options );
		case DTableColumnType.ACTION:
			return this.newCellAction( column, options );
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
		case DTableColumnType.TREE:
			return new DTableBodyCellTree( options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellText( options );
		case DTableColumnType.REAL:
			return new DTableBodyCellText( options );
		case DTableColumnType.CHECK:
		case DTableColumnType.CHECK_SINGLE:
			return new DTableBodyCellCheck( options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellButton( options );
		case DTableColumnType.LINK:
			return new DTableBodyCellLink( options );
		case DTableColumnType.SELECT:
			return this.newCellSelect( column, options );
		case DTableColumnType.ACTION:
			return this.newCellAction( column, options );
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

	protected newCellSelect( column: DTableColumn<ROW>, options: any ): DBase {
		const selecting = column.selecting;
		if( selecting.menu != null ) {
			return new DTableBodyCellSelectMenu( options );
		} else if( selecting.multiple != null ) {
			return new DTableBodyCellSelectMultiple( options );
		} else if( selecting.dialog != null ) {
			return new DTableBodyCellSelectDialog( options );
		} else if( selecting.promise != null ) {
			return new DTableBodyCellSelectPromise( options );
		} else {
			return new DTableBodyCellText( options );
		}
	}

	protected newCellAction( column: DTableColumn<ROW>, options: any ): DBase {
		const selecting = column.selecting;
		if( selecting.menu != null ) {
			return new DTableBodyCellActionMenu( options );
		} else if( selecting.dialog != null ) {
			return new DTableBodyCellActionDialog( options );
		} else if( selecting.promise != null ) {
			return new DTableBodyCellActionPromise( options );
		} else {
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
			if( column.selecting.multiple ) {
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
				menu: column.selecting.menu || column.selecting.multiple
			};
		}

		if( column.editing.enable !== false ) {
			const editing = result.editing = result.editing || {};
			editing.formatter = editing.formatter || column.editing.formatter;
			editing.unformatter = editing.unformatter || column.editing.unformatter as any;
			editing.validator = editing.validator || column.editing.validator as any;
		}

		if( column.link ) {
			result.link = column.link;
		}

		return result;
	}

	protected getType(): string {
		return "DTableBodyRow";
	}

	set( row: ROW, supplimental: unknown, rowIndex: number, forcibly?: boolean ): void {
		if( forcibly || this._row !== row ) {
			this._row = row;

			const cells = this.children;
			const cellsLength = cells.length;
			const columns = this._columns;
			const columnsLength = columns.length;
			for( let i = 0, imax = Math.min( columnsLength, cellsLength ); i < imax; ++i ) {
				const cell = cells[ i ];
				const column = columns[ i ];
				if( isBodyCell( cell ) ) {
					cell.set( column.getter( row, i ), row, supplimental, rowIndex, i, forcibly );
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

	protected getContentPositionX(): number {
		const parent = this.parent;
		if( parent ) {
			const content = parent.parent;
			if( content ) {
				return content.position.x;
			}
		}
		return 0;
	}
}
