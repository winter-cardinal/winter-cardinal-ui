/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Point, Rectangle } from "pixi.js";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseState } from "./d-base-state";
import { DTableBodyRow, DTableBodyRowOnChange, DTableBodyRowOptions } from "./d-table-body-row";
import { DTableColumn } from "./d-table-column";
import { DTableData, DTableDataOptions, DTableDataSupplimental } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
import { DTableDataSelection, DTableDataSelectionType } from "./d-table-data-selection";
import { DTableBodyCell } from "./d-table-body-cell";
import { DTableState } from "./d-table-state";
import { DTableBodyCellOptions } from "./d-table-body-cell-options";
import { DOnOptions } from "./d-on-options";
import { DApplications } from "./d-applications";
import { isNumber } from "./util/is-number";
import { DTableColumnUpdate } from "./d-table-column-update";

/**
 * {@link DTableBody} events.
 */
export interface DTableBodyEvents<EMITTER> extends DBaseEvents<EMITTER> {
	/**
	 * Triggered when rows are updated.
	 * The first and second parameters are an mapped index range of visible data.
	 * Please note that these parameters are real numbers.
	 * For instance, An index range of [0.5, 2.5] means:
	 *
	 * * The row at index 0 is partially visible.
	 * * The row at index 1 is fully visible.
	 * * The row at index 2 is partially visible.
	 *
	 * @param from a lowest mapped index of visible data
	 * @param to a highest mapped index of vislble data
	 * @param emitter an emitter
	 */
	update(from: number, to: number, emitter: EMITTER): void;
}

/**
 * {@link DTableBody} "on" options.
 */
export interface DTableBodyOnOptions<EMITTER>
	extends Partial<DTableBodyEvents<EMITTER>>,
		DOnOptions {}

export interface DTableBodyOptions<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTableBody = DThemeTableBody,
	EMITTER = any
> extends DBaseOptions<THEME, EMITTER> {
	columns?: Array<DTableColumn<ROW, unknown>>;
	row?: DTableBodyRowOptions<ROW>;
	data?: DTableDataListOptions<ROW> | DATA;
	offset?: number;
	frozen?: number;
	on?: DTableBodyOnOptions<EMITTER>;
}

export interface DThemeTableBody extends DThemeBase {
	getRowHeight(): number;
}

const toRowOptions = <ROW, DATA extends DTableData<ROW>>(
	theme: DThemeTableBody,
	options: DTableBodyOptions<ROW, DATA>,
	selectionType: DTableDataSelectionType
): DTableBodyRowOptions<ROW> => {
	const columns = options.columns || [];
	let result = options.row;
	if (result != null) {
		if (result.height == null) {
			result.height = theme.getRowHeight();
		}
		if (result.columns === undefined) {
			result.columns = columns;
		}
		if (result.frozen == null) {
			result.frozen = options.frozen;
		}
		if (result.selection === undefined) {
			result.selection = {
				type: selectionType
			};
		} else if (result.selection.type === undefined) {
			result.selection.type = selectionType;
		}
	} else {
		result = {
			columns,
			height: theme.getRowHeight(),
			frozen: options.frozen,
			selection: {
				type: selectionType
			}
		};
	}
	return result as DTableBodyRowOptions<ROW>;
};

export class DTableBody<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTableBody = DThemeTableBody,
	OPTIONS extends DTableBodyOptions<ROW, DATA, THEME> = DTableBodyOptions<ROW, DATA, THEME>
> extends DBase<THEME, OPTIONS> {
	protected static WORK_ON_CLICK = new Point();

	protected _columns: Array<DTableColumn<ROW, unknown>>;
	protected _rowHeight: number;
	protected _rowIndexMappedStart: number;
	protected _rowIndexMappedEnd: number;
	protected _rowOptions: DTableBodyRowOptions<ROW>;
	protected _updateRowsCount: number;
	protected _isUpdateRowsCalled: boolean;
	protected _isUpdateRowsCalledForcibly: boolean;
	protected _workRows: Array<DTableBodyRow<ROW>>;
	protected _onRowChangeBound: DTableBodyRowOnChange<ROW, unknown>;
	protected _columnIndexToCellOptions: Map<number, DTableBodyCellOptions<ROW>>;
	protected _data: DATA;

	constructor(options: OPTIONS) {
		super(options);

		this.transform.position.y = options.offset ?? 0;
		const data = this.toData(options.data);
		this._data = data;
		data.bind(this);
		const theme = this.theme;
		const rowOptions = toRowOptions(theme, options, data.selection.type);
		this._rowOptions = rowOptions;
		this._rowHeight = rowOptions.height != null ? rowOptions.height : theme.getRowHeight();
		this._columns = rowOptions.columns || [];
		this._rowIndexMappedStart = 0;
		this._rowIndexMappedEnd = 0;
		this._updateRowsCount = 0;
		this._isUpdateRowsCalled = false;
		this._isUpdateRowsCalledForcibly = false;
		this._workRows = [];
		this._onRowChangeBound = (newValue, oldValue, row, rowIndex, columnIndex, column): void => {
			this.onRowChange(newValue, oldValue, row, rowIndex, columnIndex, column);
		};
		this._columnIndexToCellOptions = new Map<number, DTableBodyCellOptions<ROW>>();
		this._data.emit("init", this._data);
	}

	protected onRowChange(
		newValue: unknown,
		oldValue: unknown,
		row: ROW,
		rowIndex: number,
		columnIndex: number,
		column: DTableColumn<ROW, unknown>
	): void {
		const data = this._data;
		data.emit("change", newValue, oldValue, row, rowIndex, columnIndex, data);
		if (column.update === DTableColumnUpdate.ALL) {
			this.update(true);
		}
	}

	protected toData(options?: DATA | DTableDataListOptions<ROW>): DATA {
		if (this.isData(options)) {
			return options;
		}
		return new DTableDataList<ROW>(options) as any;
	}

	protected isData(
		target?: ROW[] | DTableDataOptions<ROW> | DTableData<ROW>
	): target is DTableData<ROW> {
		return target != null && "mapped" in target;
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		this.update();
	}

	get selection(): DTableDataSelection<ROW> {
		return this._data.selection;
	}

	lock(): void {
		this._updateRowsCount += 1;
		if (this._updateRowsCount === 1) {
			this._isUpdateRowsCalled = false;
			this._isUpdateRowsCalledForcibly = false;
		}
	}

	unlock(callIfNeeded: boolean): void {
		this._updateRowsCount -= 1;
		if (this._updateRowsCount === 0) {
			if (callIfNeeded && this._isUpdateRowsCalled) {
				this.update(this._isUpdateRowsCalledForcibly);
			}
			this._isUpdateRowsCalled = false;
			this._isUpdateRowsCalledForcibly = false;
		}
	}

	/**
	 * Updates rows. If the `forcibly` is true, some dirty checkings for
	 * avoiding unnecessary state changes are skipped.
	 *
	 * @param forcibly true to update forcibly
	 */
	update(forcibly?: boolean): void {
		if (0 < this._updateRowsCount) {
			this._isUpdateRowsCalled = true;
			if (forcibly) {
				this._isUpdateRowsCalledForcibly = true;
			}
			return;
		}

		const content = this.parent;
		if (content == null) {
			return;
		}
		const contentParent = content.parent;
		if (contentParent == null) {
			return;
		}

		const rows = this.children as Array<DTableBodyRow<ROW>>;
		const height = contentParent.height;
		const rowHeight = this._rowHeight;

		const data = this._data;
		const dataMappedSize = data.mapped.size();

		const oldRowIndexMappedStart = this._rowIndexMappedStart;
		let oldRowIndexMappedEnd = this._rowIndexMappedEnd;
		let oldRowCount = oldRowIndexMappedEnd - oldRowIndexMappedStart;

		const y = this.transform.position.y;
		const newHeight = y + dataMappedSize * rowHeight;
		const newContentHeight = Math.max(height, newHeight);
		const newContentY = Math.max(height - newContentHeight, content.position.y);

		const newRowIndexMappedLowerBound = -newContentY / rowHeight;
		const newRowIndexMappedUpperBound = (height - (newContentY + y)) / rowHeight;
		let newRowIndexMappedStart = Math.floor(newRowIndexMappedLowerBound);
		newRowIndexMappedStart -= newRowIndexMappedStart % 2 === 0 ? 2 : 1;
		let newRowIndexMappedEnd = Math.floor(newRowIndexMappedUpperBound);
		newRowIndexMappedEnd += (newRowIndexMappedEnd - newRowIndexMappedStart) % 2 === 1 ? 3 : 2;
		let newRowCount = newRowIndexMappedEnd - newRowIndexMappedStart;
		if (newRowCount < oldRowCount) {
			newRowCount = oldRowCount;
			newRowIndexMappedEnd = newRowIndexMappedStart + newRowCount;
		}

		if (oldRowCount < newRowCount) {
			for (let i = oldRowCount; i < newRowCount; ++i) {
				const oldRowIndexMapped = oldRowIndexMappedStart + i;
				const newRow = this.newRow(oldRowIndexMapped % 2 === 0);
				this.addChild(newRow);
			}
			oldRowCount = newRowCount;
			oldRowIndexMappedEnd = oldRowIndexMappedStart + oldRowCount;
		} else if (newRowCount < oldRowCount) {
			for (let i = oldRowCount - 1; newRowCount <= i; --i) {
				this.removeChild(rows[i]);
			}
			oldRowCount = newRowCount;
			oldRowIndexMappedEnd = oldRowIndexMappedStart + oldRowCount;
		}

		this._rowIndexMappedStart = newRowIndexMappedStart;
		this._rowIndexMappedEnd = newRowIndexMappedEnd;

		const rowIndexMappedStartDelta = newRowIndexMappedStart - oldRowIndexMappedStart;
		const rowIndexMappedStartDeltaAbs = Math.abs(rowIndexMappedStartDelta);
		const rowsLength = rows.length;
		if (0 < rowIndexMappedStartDeltaAbs && rowIndexMappedStartDeltaAbs < rowsLength) {
			const work = this._workRows;
			if (0 < rowIndexMappedStartDelta) {
				for (let i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
					work.push(this.resetRow(rows[i]));
				}
				for (let i = rowIndexMappedStartDeltaAbs; i < rowsLength; ++i) {
					rows[i - rowIndexMappedStartDeltaAbs] = rows[i];
				}
				for (let i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
					rows[rowsLength - rowIndexMappedStartDeltaAbs + i] = work[i];
				}
			} else {
				for (let i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
					work.push(this.resetRow(rows[rowsLength - rowIndexMappedStartDeltaAbs + i]));
				}
				for (let i = rowsLength - rowIndexMappedStartDeltaAbs - 1; 0 <= i; --i) {
					rows[i + rowIndexMappedStartDeltaAbs] = rows[i];
				}
				for (let i = 0; i < rowIndexMappedStartDeltaAbs; ++i) {
					rows[i] = work[i];
				}
			}
			work.length = 0;
		}

		const selection = data.selection;
		const isRowSelectable = selection.type !== DTableDataSelectionType.NONE;
		data.mapped.each(
			(
				datum: ROW,
				supplimental: DTableDataSupplimental | null,
				index: number,
				unmappedIndex: number
			): void | boolean => {
				const row = rows[index - newRowIndexMappedStart];

				// Position
				row.position.y = index * rowHeight;

				// State
				const rowState = row.state;
				rowState.lock();
				rowState.set(DTableState.SELECTABLE, isRowSelectable);
				rowState.set(DBaseState.ACTIVE, selection.contains(unmappedIndex));
				rowState.remove(DBaseState.DISABLED);
				rowState.unlock();

				// Data
				row.set(datum, supplimental, unmappedIndex, forcibly);
			},
			newRowIndexMappedStart,
			newRowIndexMappedStart + rowsLength
		);

		for (let i = 0; newRowIndexMappedStart + i < 0 && i < rowsLength; ++i) {
			const row = rows[i];

			// Position
			row.position.y = (newRowIndexMappedStart + i) * rowHeight;

			// State
			const rowState = row.state;
			rowState.lock();
			rowState.add(DBaseState.DISABLED);
			rowState.removeAll(DTableState.SELECTABLE, DBaseState.ACTIVE);
			rowState.unlock();

			// Data
			row.unset();
		}

		for (let i = rowsLength - 1; dataMappedSize <= newRowIndexMappedStart + i && 0 <= i; --i) {
			const row = rows[i];

			// Position
			row.position.y = (newRowIndexMappedStart + i) * rowHeight;

			// State
			const rowState = row.state;
			rowState.lock();
			rowState.add(DBaseState.DISABLED);
			rowState.removeAll(DTableState.SELECTABLE, DBaseState.ACTIVE);
			rowState.unlock();

			// Data
			row.unset();
		}

		this.lock();
		content.position.y = newContentY;
		content.height = newContentHeight;
		this.height = newHeight;
		this.unlock(false);
		this.emit("update", newRowIndexMappedLowerBound, newRowIndexMappedUpperBound, this);
	}

	protected resetRow(row: DTableBodyRow<ROW>): DTableBodyRow<ROW> {
		row.blur(true);
		const cells = row.children;
		for (let i = 0, imax = cells.length; i < imax; ++i) {
			const cell = cells[i];
			if (cell instanceof DBase) {
				cell.state.isPressed = false;
			}
		}
		return row;
	}

	protected newRow(isEven: boolean): DTableBodyRow<ROW> {
		return new DTableBodyRow<ROW>(
			this._onRowChangeBound,
			isEven,
			this._columnIndexToCellOptions,
			this._rowOptions
		);
	}

	protected onParentMove(newX: number, newY: number, oldX: number, oldY: number): void {
		super.onParentMove(newX, newY, oldX, oldY);
		this.updateFrozenCellPosition(newX);
	}

	protected updateFrozenCellPosition(x: number): void {
		const frozen = this._rowOptions.frozen;
		if (frozen != null && 0 < frozen) {
			const rows = this.children as Array<DTableBodyRow<ROW>>;
			for (let i = 0, imax = rows.length; i < imax; ++i) {
				rows[i].updateFrozenCellPosition(x);
			}
		}
	}

	getClippingRect(target: unknown, result: Rectangle): void {
		super.getClippingRect(target, result);

		const parent = this.parent;
		if (parent) {
			const dy = -parent.transform.position.y;
			result.y += dy;
			result.height -= dy;
		}
	}

	/**
	 * Scroll to the given row or row index.
	 *
	 * @param target a row or an row index to which the body scrolls to.
	 * @returns true if succeeded
	 */
	scrollTo(target: ROW | number): boolean {
		const parent = this.parent;
		if (parent == null) {
			return false;
		}
		const parentParent = parent.parent;
		if (parentParent == null) {
			return false;
		}
		let rowIndexMapped = -1;
		if (isNumber(target)) {
			if (0 <= target && target < this.data.mapped.size()) {
				rowIndexMapped = target;
			}
		} else {
			this.data.mapped.each((row: ROW, _: unknown, index: number): boolean => {
				if (row === target) {
					rowIndexMapped = index;
					return false;
				}
				return true;
			});
		}
		if (rowIndexMapped < 0) {
			return false;
		}
		parent.position.y = Math.max(
			Math.min(0, parentParent.height - parent.height),
			-rowIndexMapped * this._rowHeight
		);
		DApplications.update(this);
		return true;
	}

	/**
	 * Returns a mapped row index at the given local Y position or -1.
	 *
	 * @param localY a local Y position
	 * @returns a mapped row index at the given local Y position or -1.
	 */
	toRowIndexMapped(localY: number): number {
		if (0 <= this.parent.position.y + localY) {
			const result = Math.floor(localY / this._rowHeight);
			if (0 <= result && result < this._data.mapped.size()) {
				return result;
			}
		}
		return -1;
	}

	/**
	 * Returns a row at the given mapped row index or null if not exits.
	 *
	 * @param rowIndexMapped a mapped row index
	 * @returns a row at the given mapped row index or null if not exists.
	 */
	toRow(rowIndexMapped: number): DTableBodyRow<ROW> | null {
		const index = rowIndexMapped - this._rowIndexMappedStart;
		const rows = this.children as Array<DTableBodyRow<ROW>>;
		if (0 <= index && index < rows.length) {
			return rows[index];
		}
		return null;
	}

	/**
	 * Returns a cell at the given local X position or null if not exits.
	 * This method assumes the given local X position is on the given row.
	 *
	 * @param row a row
	 * @param localX a local X position
	 * @returns a cell at the given local X position or null if not exits
	 */
	toCell(row: DTableBodyRow<ROW>, localX: number): DTableBodyCell<ROW, unknown> | null {
		const cells = row.children as Array<DTableBodyCell<ROW, unknown>>;
		const cellsLength = cells.length;
		const columns = this._columns;
		const columnsLength = columns.length;
		for (let i = 0, imax = Math.min(cellsLength, columnsLength); i < imax; ++i) {
			const cell = cells[cellsLength - i - 1];
			const x = localX - cell.position.x;
			if (0 <= x && x <= cell.width) {
				return cell;
			}
		}
		return null;
	}

	onRowClick(e: InteractionEvent): void {
		if (this.state.isActionable) {
			const local = DTableBody.WORK_ON_CLICK;
			local.copyFrom(e.data.global);
			this.toLocal(local, undefined, local, false);
			const rowIndexMapped = this.toRowIndexMapped(local.y);
			if (0 <= rowIndexMapped) {
				// Delegate to the cell at first
				const row = this.toRow(rowIndexMapped);
				if (row) {
					const cell = this.toCell(row, local.x);
					if (cell && cell.onRowSelect && cell.onRowSelect(e, local)) {
						return;
					}
				}

				// Fallback to the default
				this.onRowSelect(e, rowIndexMapped);
			}
		}
	}

	protected onRowSelect(e: InteractionEvent, rowIndexMapped: number): void {
		const data = this._data;
		const selection = data.selection;
		const isSingle = selection.type === DTableDataSelectionType.SINGLE;
		const isNotSingle = !isSingle;
		const rowIndex = data.mapped.unmap(rowIndexMapped);
		const originalEvent = e.data.originalEvent;
		const ctrlKey = originalEvent.ctrlKey;
		const shiftKey = originalEvent.shiftKey;
		if (isSingle || selection.isEmpty() || !(isNotSingle && (ctrlKey || shiftKey))) {
			selection.clearAndAdd(rowIndex);
		} else if (ctrlKey) {
			selection.toggle(rowIndex);
		} else if (shiftKey) {
			const lastRowIndex = selection.last;
			if (lastRowIndex != null) {
				const sorter = data.sorter;
				const filter = data.filter;
				const rowIndexSorted = sorter.map(rowIndex);
				const lastRowIndexSorted = sorter.map(lastRowIndex);
				if (rowIndexSorted != null && lastRowIndexSorted != null) {
					let istart = lastRowIndexSorted + 1;
					let iend = rowIndexSorted + 1;
					if (rowIndexSorted < lastRowIndexSorted) {
						istart = rowIndexSorted;
						iend = lastRowIndexSorted;
					}
					if (istart < iend) {
						const rowIndices: number[] = [];
						const indicesFiltered = filter.indices;
						const indicesSorted = sorter.indices;
						if (indicesFiltered) {
							if (indicesSorted) {
								for (let i = 0, imax = indicesFiltered.length; i < imax; ++i) {
									const indexFiltered = indicesFiltered[i];
									if (istart <= indexFiltered && indexFiltered < iend) {
										rowIndices.push(indicesSorted[indexFiltered]);
									}
								}
							} else {
								for (let i = 0, imax = indicesFiltered.length; i < imax; ++i) {
									const indexFiltered = indicesFiltered[i];
									if (istart <= indexFiltered && indexFiltered < iend) {
										rowIndices.push(indexFiltered);
									}
								}
							}
						} else {
							if (indicesSorted) {
								for (let i = istart; i < iend; ++i) {
									rowIndices.push(indicesSorted[i]);
								}
							} else {
								for (let i = istart; i < iend; ++i) {
									rowIndices.push(i);
								}
							}
						}
						selection.addAll(rowIndices);
					}
				}
			}
		}
	}

	onDblClick(e: MouseEvent | TouchEvent, interactionManager: InteractionManager): boolean {
		return super.onDblClick(e, interactionManager);
	}

	protected getType(): string {
		return "DTableBody";
	}

	get data(): DATA {
		return this._data;
	}
}
