/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
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
import { DTableBodyCellOptionsUnion, DTableColumn, DTableColumnType } from "./d-table-column";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";
import { DTableState } from "./d-table-state";

export interface DTableBodyRowSelectionOptions {
	type?: DTableDataSelectionType;
}

export interface DTableBodyRowOptions<
	ROW,
	THEME extends DThemeTableBodyRow = DThemeTableBodyRow
> extends DTableRowOptions<ROW, DTableColumn<ROW>, THEME> {
	height?: number;
	cell?: DTableBodyCellOptionsUnion<ROW>;
	selection?: DTableBodyRowSelectionOptions;
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
	protected _value: ROW | undefined = undefined;
	protected _index: number;
	protected _onCellChangeBound!: OnCellChange<ROW>;

	constructor( options: OPTIONS ) {
		super( options );
		this._index = -1;
	}

	protected init( options: OPTIONS ) {
		this._onCellChangeBound = ( newValue, oldValue, row, rowIndex, columnIndex ): void => {
			this.emit( "rowchange", newValue, oldValue, row, rowIndex, columnIndex, this );
		};
		super.init( options );
	}

	protected newCell(
		columnIndex: number,
		column: DTableColumn<ROW>,
		columns: Array<DTableColumn<ROW>>,
		options: OPTIONS
	): DBase {
		const cellOptions = this.toCellOptions( columnIndex, column, options );
		if( column.editing.enable !== false ) {
			const cell = this.newCellEditable( columnIndex, column, cellOptions );
			cell.on( "cellchange", this._onCellChangeBound );
			return cell;
		} else {
			const cell = this.newCellUnediable( columnIndex, column, cellOptions );
			if( column.type === DTableColumnType.TREE ) {
				cell.on( "cellchange", this._onCellChangeBound );
			} else {
				cell.state.isReadOnly = true;
			}
			return cell;
		}
	}

	protected newCellEditable(
		columnIndex: number,
		column: DTableColumn<ROW>,
		options: any
	): DBase {
		switch( column.type ) {
		case DTableColumnType.INDEX:
			return new DTableBodyCellIndex( columnIndex, column, options );
		case DTableColumnType.TEXT:
			return new DTableBodyCellInputText( columnIndex, column, options );
		case DTableColumnType.TREE:
			return new DTableBodyCellInputTree( columnIndex, column, options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellInputInteger( columnIndex, column, options );
		case DTableColumnType.REAL:
			return new DTableBodyCellInputReal( columnIndex, column, options );
		case DTableColumnType.CHECK:
		case DTableColumnType.CHECK_SINGLE:
			return new DTableBodyCellCheck( columnIndex, column, options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( columnIndex, column, options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellButton( columnIndex, column, options );
		case DTableColumnType.LINK:
			return new DTableBodyCellLink( columnIndex, column, options );
		case DTableColumnType.SELECT:
			return this.newCellSelect( columnIndex, column, options );
		case DTableColumnType.ACTION:
			return this.newCellAction( columnIndex, column, options );
		case DTableColumnType.DATE:
			return new DTableBodyCellDate( columnIndex, column, options );
		case DTableColumnType.DATETIME:
			return new DTableBodyCellDatetime( columnIndex, column, options );
		case DTableColumnType.TIME:
			return new DTableBodyCellTime( columnIndex, column, options );
		default:
			return new DTableBodyCellText( columnIndex, column, options );
		}
	}

	protected newCellUnediable(
		columnIndex: number,
		column: DTableColumn<ROW>,
		options: any
	): DBase {
		switch( column.type ) {
		case DTableColumnType.INDEX:
			return new DTableBodyCellIndex( columnIndex, column, options );
		case DTableColumnType.TEXT:
			return new DTableBodyCellText( columnIndex, column, options );
		case DTableColumnType.TREE:
			return new DTableBodyCellTree( columnIndex, column, options );
		case DTableColumnType.INTEGER:
			return new DTableBodyCellText( columnIndex, column, options );
		case DTableColumnType.REAL:
			return new DTableBodyCellText( columnIndex, column, options );
		case DTableColumnType.CHECK:
		case DTableColumnType.CHECK_SINGLE:
			return new DTableBodyCellCheck( columnIndex, column, options );
		case DTableColumnType.COLOR:
			return new DTableBodyCellColor( columnIndex, column, options );
		case DTableColumnType.BUTTON:
			return new DTableBodyCellButton( columnIndex, column, options );
		case DTableColumnType.LINK:
			return new DTableBodyCellLink( columnIndex, column, options );
		case DTableColumnType.SELECT:
			return this.newCellSelect( columnIndex, column, options );
		case DTableColumnType.ACTION:
			return this.newCellAction( columnIndex, column, options );
		case DTableColumnType.DATE:
			return new DTableBodyCellDate( columnIndex, column, options );
		case DTableColumnType.DATETIME:
			return new DTableBodyCellDatetime( columnIndex, column, options );
		case DTableColumnType.TIME:
			return new DTableBodyCellTime( columnIndex, column, options );
		default:
			return new DTableBodyCellText( columnIndex, column, options );
		}
	}

	protected newCellSelect( columnIndex: number, column: DTableColumn<ROW>, options: any ): DBase {
		const selecting = column.selecting;
		if( selecting.menu != null ) {
			return new DTableBodyCellSelectMenu( columnIndex, column, options );
		} else if( selecting.multiple != null ) {
			return new DTableBodyCellSelectMultiple( columnIndex, column, options );
		} else if( selecting.dialog != null ) {
			return new DTableBodyCellSelectDialog( columnIndex, column, options );
		} else if( selecting.promise != null ) {
			return new DTableBodyCellSelectPromise( columnIndex, column, options );
		} else {
			return new DTableBodyCellText( columnIndex, column, options );
		}
	}

	protected newCellAction( columnIndex: number, column: DTableColumn<ROW>, options: any ): DBase {
		const selecting = column.selecting;
		if( selecting.menu != null ) {
			return new DTableBodyCellActionMenu( columnIndex, column, options );
		} else if( selecting.dialog != null ) {
			return new DTableBodyCellActionDialog( columnIndex, column, options );
		} else if( selecting.promise != null ) {
			return new DTableBodyCellActionPromise( columnIndex, column, options );
		} else {
			return new DTableBodyCellText( columnIndex, column, options );
		}
	}

	protected toCellOptions(
		columnIndex: number,
		column: DTableColumn<ROW>,
		options: OPTIONS
	): DTableBodyCellOptionsUnion<ROW> {
		let result: any = (column.body || options.cell);
		const columnWeight = column.weight;
		const columnWidth = column.width;
		const columnFormatter = column.formatter;
		const columnAlign = column.align;
		const columnSelecting = column.selecting;
		const columnSelectingMenu = columnSelecting.menu || columnSelecting.multiple;
		if( result != null ) {
			result.weight = columnWeight;
			result.width = columnWidth;

			const text = result.text || {};
			result.text = text;
			text.formatter ||= columnFormatter;

			const textAlign = text.align || {};
			text.align = textAlign;
			textAlign.horizontal = columnAlign;

			result.menu ||= columnSelectingMenu;
		} else {
			result = {
				weight: columnWeight,
				width: columnWidth,
				text: {
					formatter: columnFormatter,
					align: {
						horizontal: columnAlign
					}
				},
				menu: columnSelectingMenu
			};
		}

		const columnEditing = column.editing;
		if( columnEditing.enable !== false ) {
			const editing = result.editing || {};
			result.editing = editing;
			editing.formatter ||= columnEditing.formatter;
			editing.unformatter ||= columnEditing.unformatter;
			editing.validator ||= columnEditing.validator;
		}

		const columnLink = column.link;
		if( columnLink ) {
			result.link = columnLink;
		}

		const selectionType = ( options?.selection?.type ?? DTableDataSelectionType.NONE );
		if( selectionType !== DTableDataSelectionType.NONE ) {
			result.when = "DOUBLE_CLICKED";
			result.cursor = ( state: DBaseStateSet ): string | undefined => {
				if( state.in( DTableState.SELECTABLE ) ) {
					return "pointer";
				}
				return undefined;
			};
		}

		return result;
	}

	protected getType(): string {
		return "DTableBodyRow";
	}

	/**
	 * Returns a row data if exists.
	 * Returns undefined if a row data does not exit.
	 *
	 * @returns a row data or undefined.
	 */
	get value(): ROW | undefined {
		return this._value;
	}

	/**
	 * Returns a row index if a row data exists.
	 * Returns -1 if a row data does not exit.
	 *
	 * @returns a row index or -1.
	 */
	get index(): number {
		return this._index;
	}

	set( value: ROW, supplimental: unknown, rowIndex: number, forcibly?: boolean ): void {
		if( forcibly || this._value !== value || this._index !== rowIndex ) {
			this._value = value;
			this._index = rowIndex;

			const cells = this.children;
			const cellsLength = cells.length;
			const columns = this._columns;
			const columnsLength = columns.length;
			for( let i = 0; i < cellsLength; ++i ) {
				const cell = cells[ i ];
				const columnIndex = columnsLength - 1 - i;
				const column = columns[ columnIndex ];
				if( isBodyCell( cell ) ) {
					cell.set( column.getter( value, columnIndex ), value, supplimental, rowIndex, columnIndex, forcibly );
				}
			}

			this.onSet( value, rowIndex );
		}
	}

	protected onSet( value: ROW, rowIndex: number ): void {
		this.emit( "set", value, rowIndex, this );
	}

	unset(): void {
		if( this._value !== undefined ) {
			this._value = undefined;
			this._index = -1;

			const cells = this.children;
			const cellsLength = cells.length;
			for( let i = 0; i < cellsLength; ++i ) {
				const cell = cells[ i ];
				if( isBodyCell( cell ) ) {
					cell.unset();
				}
			}

			this.onUnset();
		}
	}

	protected onUnset(): void {
		this.emit( "unset", this );
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
