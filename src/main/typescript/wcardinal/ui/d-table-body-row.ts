/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseStateSet } from "./d-base-state-set";
import { DTableBodyCell, DTableBodyCellOnChange } from "./d-table-body-cell";
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
import { DTableBodyCellInputTextArea } from "./d-table-body-cell-input-text-area";
import { DTableBodyCellInputTree } from "./d-table-body-cell-input-tree";
import { DTableBodyCellLink } from "./d-table-body-cell-link";
import { DTableBodyCellOptions } from "./d-table-body-cell-options";
import { DTableBodyCellSelectDialog } from "./d-table-body-cell-select-dialog";
import { DTableBodyCellSelectMenu } from "./d-table-body-cell-select-menu";
import { DTableBodyCellSelectMultiple } from "./d-table-body-cell-select-multiple";
import { DTableBodyCellSelectPromise } from "./d-table-body-cell-select-promise";
import { DTableBodyCellText } from "./d-table-body-cell-text";
import { DTableBodyCellTextArea } from "./d-table-body-cell-text-area";
import { DTableBodyCellTime } from "./d-table-body-cell-time";
import { DTableBodyCellTree } from "./d-table-body-cell-tree";
import { DTableColumn } from "./d-table-column";
import { DTableColumnType } from "./d-table-column-type";
import { DTableColumnUpdate } from "./d-table-column-update";
import { DTableDataSupplimental } from "./d-table-data";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableRow, DTableRowOptions, DThemeTableRow } from "./d-table-row";
import { DTableState } from "./d-table-state";
import { toMerged } from "./util/to-merged";

export interface DTableBodyRowSelectionOptions {
	type?: DTableDataSelectionType;
}

export interface DTableBodyRowOptions<ROW, THEME extends DThemeTableBodyRow = DThemeTableBodyRow>
	extends DTableRowOptions<ROW, DTableColumn<ROW, unknown>, THEME> {
	height?: number;
	cell?: DTableBodyCellOptions<ROW>;
	selection?: DTableBodyRowSelectionOptions;
}

export interface DThemeTableBodyRow extends DThemeTableRow {}

export type DTableBodyRowOnChange<ROW, VALUE, EMITTER = any> = (
	newValue: VALUE,
	oldValue: VALUE,
	row: ROW,
	rowIndex: number,
	columnIndex: number,
	column: DTableColumn<ROW, VALUE>,
	emitter: EMITTER
) => void;

export class DTableBodyRow<
	ROW,
	THEME extends DThemeTableBodyRow = DThemeTableBodyRow,
	OPTIONS extends DTableBodyRowOptions<ROW, THEME> = DTableBodyRowOptions<ROW, THEME>
> extends DTableRow<ROW, DTableColumn<ROW, unknown>, THEME, OPTIONS> {
	protected _value?: ROW;
	protected _supplimental?: DTableDataSupplimental | null;
	protected _index: number;
	protected _onChange: DTableBodyRowOnChange<ROW, unknown>;
	protected _onCellChangeBound: DTableBodyCellOnChange<ROW, any>;
	protected _columnIndexToCellOptions: Map<number, DTableBodyCellOptions<ROW>>;

	constructor(
		onChange: DTableBodyRowOnChange<ROW, unknown>,
		isEven: boolean,
		columnIndexToCellOptions: Map<number, DTableBodyCellOptions<ROW>>,
		options: OPTIONS
	) {
		super(options);

		this._index = -1;
		this._onChange = onChange;
		this._onCellChangeBound = (
			newValue,
			oldValue,
			row,
			rowIndex,
			columnIndex,
			column
		): void => {
			this.onCellChange(newValue, oldValue, row, rowIndex, columnIndex, column);
		};
		this._columnIndexToCellOptions = columnIndexToCellOptions;
		this.state.isAlternated = !isEven;
		this.initCells(options, this._columns, this._frozen);
	}

	protected onCellChange(
		newValue: unknown,
		oldValue: unknown,
		row: ROW,
		rowIndex: number,
		columnIndex: number,
		column: DTableColumn<ROW, unknown>
	): void {
		this.emit("change", newValue, oldValue, row, rowIndex, columnIndex, this);
		if (column.update === DTableColumnUpdate.ROW) {
			const value = this._value;
			const supplimental = this._supplimental;
			const index = this._index;
			if (value !== undefined && supplimental !== undefined) {
				this.set(value, supplimental, index, true);
			}
		}
		this._onChange(newValue, oldValue, row, rowIndex, columnIndex, column, this);
	}

	protected newCell(
		columnIndex: number,
		column: DTableColumn<ROW, unknown>,
		columns: Array<DTableColumn<ROW, unknown>>,
		options: OPTIONS
	): DBase {
		const onChange = this._onCellChangeBound;
		const columnIndexToCellOptions = this._columnIndexToCellOptions;
		let cellOptions = columnIndexToCellOptions.get(columnIndex);
		if (cellOptions == null) {
			cellOptions = this.toCellOptions(columnIndex, column, options);
			columnIndexToCellOptions.set(columnIndex, cellOptions);
		}
		if (column.editing.enable !== false) {
			return this.newCellEditable(columnIndex, column, onChange, cellOptions);
		} else {
			const cell = this.newCellUnediable(columnIndex, column, onChange, cellOptions);
			if (column.type !== DTableColumnType.TREE) {
				cell.state.isReadOnly = true;
			}
			return cell;
		}
	}

	protected newCellEditable(
		columnIndex: number,
		column: DTableColumn<ROW, any>,
		onChange: DTableBodyCellOnChange<ROW, any>,
		options: any
	): DBase {
		switch (column.type) {
			case DTableColumnType.INDEX:
				return new DTableBodyCellIndex(columnIndex, column, onChange, options);
			case DTableColumnType.TEXT:
				return new DTableBodyCellInputText(columnIndex, column, onChange, options);
			case DTableColumnType.TEXT_AREA:
				return new DTableBodyCellInputTextArea(columnIndex, column, onChange, options);
			case DTableColumnType.TREE:
				return new DTableBodyCellInputTree(columnIndex, column, onChange, options);
			case DTableColumnType.INTEGER:
				return new DTableBodyCellInputInteger(columnIndex, column, onChange, options);
			case DTableColumnType.REAL:
				return new DTableBodyCellInputReal(columnIndex, column, onChange, options);
			case DTableColumnType.CHECK:
			case DTableColumnType.CHECK_SINGLE:
				return new DTableBodyCellCheck(columnIndex, column, onChange, options);
			case DTableColumnType.COLOR:
				return new DTableBodyCellColor(columnIndex, column, onChange, options);
			case DTableColumnType.BUTTON:
				return new DTableBodyCellButton(columnIndex, column, onChange, options);
			case DTableColumnType.LINK:
				return new DTableBodyCellLink(columnIndex, column, onChange, options);
			case DTableColumnType.SELECT:
				return this.newCellSelect(columnIndex, column, onChange, options);
			case DTableColumnType.ACTION:
				return this.newCellAction(columnIndex, column, onChange, options);
			case DTableColumnType.DATE:
				return new DTableBodyCellDate(columnIndex, column, onChange, options);
			case DTableColumnType.DATETIME:
				return new DTableBodyCellDatetime(columnIndex, column, onChange, options);
			case DTableColumnType.TIME:
				return new DTableBodyCellTime(columnIndex, column, onChange, options);
			default:
				return new DTableBodyCellText(columnIndex, column, onChange, options);
		}
	}

	protected newCellUnediable(
		columnIndex: number,
		column: DTableColumn<ROW, any>,
		onChange: DTableBodyCellOnChange<ROW, any>,
		options: any
	): DBase {
		switch (column.type) {
			case DTableColumnType.INDEX:
				return new DTableBodyCellIndex(columnIndex, column, onChange, options);
			case DTableColumnType.TEXT:
				return new DTableBodyCellText(columnIndex, column, onChange, options);
			case DTableColumnType.TEXT_AREA:
				return new DTableBodyCellTextArea(columnIndex, column, onChange, options);
			case DTableColumnType.TREE:
				return new DTableBodyCellTree(columnIndex, column, onChange, options);
			case DTableColumnType.INTEGER:
				return new DTableBodyCellText(columnIndex, column, onChange, options);
			case DTableColumnType.REAL:
				return new DTableBodyCellText(columnIndex, column, onChange, options);
			case DTableColumnType.CHECK:
			case DTableColumnType.CHECK_SINGLE:
				return new DTableBodyCellCheck(columnIndex, column, onChange, options);
			case DTableColumnType.COLOR:
				return new DTableBodyCellColor(columnIndex, column, onChange, options);
			case DTableColumnType.BUTTON:
				return new DTableBodyCellButton(columnIndex, column, onChange, options);
			case DTableColumnType.LINK:
				return new DTableBodyCellLink(columnIndex, column, onChange, options);
			case DTableColumnType.SELECT:
				return this.newCellSelect(columnIndex, column, onChange, options);
			case DTableColumnType.ACTION:
				return this.newCellAction(columnIndex, column, onChange, options);
			case DTableColumnType.DATE:
				return new DTableBodyCellDate(columnIndex, column, onChange, options);
			case DTableColumnType.DATETIME:
				return new DTableBodyCellDatetime(columnIndex, column, onChange, options);
			case DTableColumnType.TIME:
				return new DTableBodyCellTime(columnIndex, column, onChange, options);
			default:
				return new DTableBodyCellText(columnIndex, column, onChange, options);
		}
	}

	protected newCellSelect(
		columnIndex: number,
		column: DTableColumn<ROW, any>,
		onChange: DTableBodyCellOnChange<ROW, any>,
		options: any
	): DBase {
		const selecting = column.selecting;
		if (selecting.menu != null) {
			return new DTableBodyCellSelectMenu(columnIndex, column, onChange, options);
		} else if (selecting.multiple != null) {
			return new DTableBodyCellSelectMultiple(columnIndex, column, onChange, options);
		} else if (selecting.dialog != null) {
			return new DTableBodyCellSelectDialog(columnIndex, column, onChange, options);
		} else if (selecting.promise != null) {
			return new DTableBodyCellSelectPromise(columnIndex, column, onChange, options);
		} else {
			return new DTableBodyCellText(columnIndex, column, onChange, options);
		}
	}

	protected newCellAction(
		columnIndex: number,
		column: DTableColumn<ROW, any>,
		onChange: DTableBodyCellOnChange<ROW, any>,
		options: any
	): DBase {
		const selecting = column.selecting;
		if (selecting.menu != null) {
			return new DTableBodyCellActionMenu(columnIndex, column, onChange, options);
		} else if (selecting.dialog != null) {
			return new DTableBodyCellActionDialog(columnIndex, column, onChange, options);
		} else if (selecting.promise != null) {
			return new DTableBodyCellActionPromise(columnIndex, column, onChange, options);
		} else {
			return new DTableBodyCellText(columnIndex, column, onChange, options);
		}
	}

	protected toCellOptions(
		columnIndex: number,
		column: DTableColumn<ROW, unknown>,
		options: OPTIONS
	): DTableBodyCellOptions<ROW> {
		const result = toMerged(column.body, options.cell);

		// Weight
		result.weight = column.weight;

		// Width
		result.width = column.width;

		// State
		result.state ??= column.state.initial;

		// Text formatter
		const columnFormatter = column.formatter;
		if (columnFormatter != null) {
			const text = (result.text ??= {});
			text.formatter ??= columnFormatter;
		}

		// Text align horizontal
		const columnAlign = column.align;
		if (columnAlign != null) {
			const text = (result.text ??= {});
			const textAlign = (text.align ??= {});
			textAlign.horizontal ??= columnAlign;
		}

		// Editing
		const columnEditing = column.editing;
		if (columnEditing.enable !== false) {
			const editing = ((result as any).editing ??= {});
			editing.formatter ??= columnEditing.formatter;
			editing.unformatter ??= columnEditing.unformatter;
			editing.validator ??= columnEditing.validator;
		}

		// Link
		const columnLink = column.link;
		if (columnLink !== undefined) {
			(result as any).link = columnLink;
		}

		// Selecting
		const columnSelecting = column.selecting;
		const columnSelectingMenu = columnSelecting.menu ?? columnSelecting.multiple;
		if (columnSelectingMenu !== undefined) {
			(result as any).menu = columnSelectingMenu;
		}

		const selectionType = options?.selection?.type ?? DTableDataSelectionType.NONE;
		if (selectionType !== DTableDataSelectionType.NONE) {
			(result as any).when = "DOUBLE_CLICKED";
			result.cursor = (state: DBaseStateSet): string | undefined => {
				if (state.in(DTableState.SELECTABLE)) {
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

	protected isCell(target: any): target is DTableBodyCell<unknown, unknown> {
		return target != null && "set" in target;
	}

	set(
		value: ROW,
		supplimental: DTableDataSupplimental | null,
		rowIndex: number,
		forcibly?: boolean
	): void {
		if (
			forcibly ||
			this._value !== value ||
			this._supplimental !== supplimental ||
			this._index !== rowIndex
		) {
			this._value = value;
			this._supplimental = supplimental;
			this._index = rowIndex;

			const cells = this.children;
			const cellsLength = cells.length;
			const columns = this._columns;
			const columnsLength = columns.length;
			for (let i = 0; i < cellsLength; ++i) {
				const cell = cells[i];
				const columnIndex = columnsLength - 1 - i;
				const column = columns[columnIndex];
				if (this.isCell(cell)) {
					cell.set(
						column.getter(value, columnIndex),
						value,
						supplimental,
						rowIndex,
						columnIndex,
						forcibly
					);
				}
			}

			this.onSet(value, rowIndex);
		}
	}

	protected onSet(value: ROW, rowIndex: number): void {
		this.emit("set", value, rowIndex, this);
	}

	unset(): void {
		if (this._value !== undefined) {
			this._value = undefined;
			this._index = -1;

			const cells = this.children;
			const cellsLength = cells.length;
			for (let i = 0; i < cellsLength; ++i) {
				const cell = cells[i];
				if (this.isCell(cell)) {
					cell.unset();
				}
			}

			this.onUnset();
		}
	}

	protected onUnset(): void {
		this.emit("unset", this);
	}

	protected getContentPositionX(): number {
		const parent = this.parent;
		if (parent) {
			const content = parent.parent;
			if (content) {
				return content.position.x;
			}
		}
		return 0;
	}

	resizeCell(index: number, newWidth: number): void {
		const cells = this.children;
		for (const cell of cells) {
			if (this.isCell(cell) && cell.columnIndex === index) {
				const ratio = newWidth / cell.width;
				cell.width = newWidth;
				if (cell.weight > 0) {
					cell.weight = cell.weight * ratio;
				}
			}
		}
	}
}
