/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Rectangle } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions } from "./d-base";
import { DContentOptions } from "./d-content";
import { DFocusable, DFocusableContainer } from "./d-controller-focus";
import { DPane, DPaneOptions, DThemePane } from "./d-pane";
import { DTableBody, DTableBodyOptions } from "./d-table-body";
import { DTableCategory, DTableCategoryOptions } from "./d-table-category";
import { DTableColumn, DTableColumnOptions } from "./d-table-column";
import { DTableData, DTableDataOptions } from "./d-table-data";
import { DTableDataList, DTableDataListOptions } from "./d-table-data-list";
import { DTableDataSelectionType } from "./d-table-data-selection";
import { DTableHeader, DTableHeaderOptions } from "./d-table-header";
import { DTableRow } from "./d-table-row";
import { isArray } from "./util/is-array";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DTableScrollBar } from "./d-table-scrollbar";
import { DPaneScrollBarOptions } from "./d-pane-scrollbar";
import { DTableColumnContainer } from "./d-table-column-container";
import { DTableColumnContainerImpl } from "./d-table-column-container-impl";
import { DTableCategoryContainer } from "./d-table-category-container";
import { DTableCategoryContainerImpl } from "./d-table-category-container-impl";

export interface DTableOptions<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions
> extends DPaneOptions<THEME, CONTENT_OPTIONS> {
	columns: DTableColumnOptions<ROW>[];
	category?: DTableCategoryOptions;
	header?: DTableHeaderOptions<ROW>;
	body?: DTableBodyOptions<ROW, DATA>;
	data?: ROW[] | DTableDataListOptions<ROW> | DATA;
}

export interface DThemeTable extends DThemePane {}

export class DTable<
	ROW,
	DATA extends DTableData<ROW> = DTableDataList<ROW>,
	THEME extends DThemeTable = DThemeTable,
	CONTENT_OPTIONS extends DBaseOptions = DContentOptions,
	OPTIONS extends DTableOptions<ROW, DATA, THEME, CONTENT_OPTIONS> = DTableOptions<
		ROW,
		DATA,
		THEME,
		CONTENT_OPTIONS
	>
> extends DPane<THEME, CONTENT_OPTIONS, OPTIONS> {
	protected _column?: DTableColumnContainer<ROW>;
	protected _category?: DTableCategoryContainer;
	protected _headerOffset?: number;
	protected _header?: DTableHeader<ROW> | null;
	protected _bodyOffset?: number;
	protected _body?: DTableBody<ROW, DATA>;

	constructor(options?: OPTIONS) {
		super(options);

		const content = this.content;
		const body = this.body;
		content.addChild(body);
		if (body.data.selection.type !== DTableDataSelectionType.NONE) {
			this.on(UtilPointerEvent.tap, (e: InteractionEvent): void => {
				body.onRowClick(e);
			});
		}

		const header = this.header;
		if (header) {
			content.addChild(header);
		}

		const categories = this.categories;
		for (let i = categories.length - 1; 0 <= i; --i) {
			content.addChild(categories[i]);
		}

		body.update();
	}

	get column(): DTableColumnContainer<ROW> {
		return (this._column ??= this.newColumn());
	}

	protected newColumn(): DTableColumnContainer<ROW> {
		const result = new DTableColumnContainerImpl<ROW>(this._options?.columns);
		const columns = result.items;
		for (let i = 0, imax = columns.length; i < imax; ++i) {
			const column = columns[i];
			column.on("resize", this.newOnColumnResize(i, column));
		}
		return result;
	}

	protected newOnColumnResize(index: number, column: DTableColumn<ROW>): () => void {
		return (): void => {
			this.onColumnResize(index, column);
		};
	}

	protected onColumnResize(index: number, column: DTableColumn<ROW>): void {
		this.onColumnResizeHeader(index, column);
		this.onColumnResizeBody(index, column);
	}

	protected onColumnResizeHeader(index: number, column: DTableColumn<ROW>): void {
		const header = this.header;
		if (header != null) {
			const columnWeight = column.weight;
			if (columnWeight != null) {
				this.onColumnResizeWeight(header, index, columnWeight);
			} else {
				const columnWidth = column.width;
				if (columnWidth != null) {
					this.onColumnResizeWidth(header, index, columnWidth);
				}
			}
		}
	}

	protected onColumnResizeBody(index: number, column: DTableColumn<ROW>): void {
		const rows = this.body.children as DTableRow<ROW, DTableColumn<ROW>>[];
		const columnWeight = column.weight;
		if (columnWeight != null) {
			for (let i = 0, imax = rows.length; i < imax; ++i) {
				this.onColumnResizeWeight(rows[i], index, columnWeight);
			}
		} else {
			const columnWidth = column.width;
			if (columnWidth != null) {
				for (let i = 0, imax = rows.length; i < imax; ++i) {
					this.onColumnResizeWidth(rows[i], index, columnWidth);
				}
			}
		}
	}

	protected onColumnResizeWeight(row: DBase, index: number, columnWeight: number): void {
		const cells = row.children as DBase[];
		const cellsLength = cells.length;
		const cellsIndex = cellsLength - index - 1;
		if (0 <= cellsIndex && cellsIndex < cellsLength) {
			cells[cellsIndex].weight = columnWeight;
		}
	}

	protected onColumnResizeWidth(row: DBase, index: number, columnWidth: number): void {
		const cells = row.children as DBase[];
		const cellsLength = cells.length;
		const cellsIndex = cellsLength - index - 1;
		if (0 <= cellsIndex && cellsIndex < cellsLength) {
			cells[cellsIndex].width = columnWidth;
		}
	}

	get columns(): DTableColumn<ROW>[] {
		return this.column.items;
	}

	get frozen(): number {
		return this.column.frozen;
	}

	get category(): DTableCategoryContainer {
		return (this._category = this.newCategory());
	}

	protected newCategory(): DTableCategoryContainer {
		const column = this.column;
		return new DTableCategoryContainerImpl(
			column.items,
			column.frozen,
			this._options?.category
		);
	}

	get categories(): DTableCategory[] {
		return this.category.items;
	}

	protected initContent(content: DBase): void {
		super.initContent(content);
		content.state.isFocusReverse = true;
	}

	protected onContentChange(): void {
		super.onContentChange();
		this.body.update();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		const scrollbar = this.scrollbar;
		scrollbar.lock();

		const body = this.body;
		body.lock();
		super.onResize(newWidth, newHeight, oldWidth, oldHeight);
		body.update();
		body.unlock(true);

		scrollbar.unlock(true);
	}

	protected onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean {
		const result = this.body.onDblClick(e, interactionManager);
		return super.onDblClick(e, interactionManager) || result;
	}

	protected newScrollBar(options?: DPaneScrollBarOptions): DTableScrollBar {
		return new DTableScrollBar(this, options, (isRegionVisible: boolean): void => {
			this.onScrollBarUpdate(isRegionVisible);
		});
	}

	protected newContent(options?: CONTENT_OPTIONS): DBase {
		const result = super.newContent(options);

		// X & Width
		let columnWidthTotal = 0;
		const columns = this.columns;
		const columnsLength = columns.length;
		for (let i = 0; i < columnsLength; ++i) {
			const column = columns[i];
			const columnWidth = column.width;
			if (columnWidth != null) {
				columnWidthTotal += columnWidth;
			}
		}
		if (0 < columnWidthTotal) {
			const onColumnResize = () => {
				columnWidthTotal = 0;
				for (let i = 0; i < columnsLength; ++i) {
					const column = columns[i];
					const columnWidth = column.width;
					if (columnWidth != null) {
						columnWidthTotal += columnWidth;
					}
				}
				const parentWidth = this.width;
				const parentHeight = this.height;
				const newWidth = Math.max(parentWidth, columnWidthTotal);
				const newXMin = parentWidth - newWidth;
				// The X position must be in [newXMin, 0].
				if (result.x < newXMin) {
					result.x = newXMin;
				}
				// Force the with reevaluated
				result.onParentResize(parentWidth, parentHeight, this.padding);
			};
			for (let i = 0; i < columnsLength; ++i) {
				columns[i].on("resize", onColumnResize);
			}
			result.setWidth((p) => {
				return Math.max(p, columnWidthTotal);
			});
		} else {
			result.setWidth("100%");
		}

		// Done
		return result;
	}

	protected getHeaderOffset(): number {
		let result = this._headerOffset;
		if (result == null) {
			result = this.newHeaderOffset();
			this._headerOffset = result;
		}
		return result;
	}

	protected newHeaderOffset(): number {
		let result = 0;
		const categories = this.categories;
		for (let i = 0, imax = categories.length; i < imax; ++i) {
			result += categories[i].height;
		}
		return result;
	}

	get header(): DTableHeader<ROW> | null {
		let result = this._header;
		if (result === undefined) {
			result = this.newHeader();
			this._header = result;
		}
		return result;
	}

	protected hasHeader(options?: OPTIONS): boolean {
		if (options) {
			const columns = options.columns;
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				if (columns[i].label != null) {
					return true;
				}
			}
		}
		return false;
	}

	protected newHeader(): DTableHeader<ROW> | null {
		const options = this._options;
		if (this.hasHeader(options)) {
			const column = this.column;
			return new DTableHeader<ROW>(
				this,
				column.items,
				column.frozen,
				this.getHeaderOffset(),
				options?.header
			);
		}
		return null;
	}

	protected getBodyOffset(): number {
		return (this._bodyOffset ??= this.newBodyOffset());
	}

	protected newBodyOffset(): number {
		return this.getHeaderOffset() + (this.header?.height ?? 0);
	}

	get body(): DTableBody<ROW, DATA> {
		return (this._body ??= this.newBody());
	}

	protected newBody(): DTableBody<ROW, DATA> {
		const options = this._options;
		const column = this.column;
		return new DTableBody<ROW, DATA>(
			column.items,
			column.frozen,
			this.getBodyOffset(),
			this.toBodyOptions(options?.body, options?.data)
		);
	}

	protected toBodyOptions(
		options?: DTableBodyOptions<ROW, DATA>,
		data?: ROW[] | DTableDataOptions<ROW> | DATA
	): DTableBodyOptions<ROW, DATA> {
		if (options != null) {
			if (options.data === undefined && data !== undefined) {
				if (isArray(data)) {
					options.data = {
						rows: data
					};
				} else {
					options.data = data;
				}
			}
			if (options.height === undefined && options.weight === undefined) {
				options.weight = 1;
			}
			return options;
		}
		if (isArray(data)) {
			return {
				data: {
					rows: data
				},
				weight: 1
			};
		} else {
			return {
				data,
				weight: 1
			};
		}
	}

	get data(): DATA {
		return this.body.data;
	}

	protected getFocusedChildClippingRect(
		focused: DBase,
		contentX: number,
		contentY: number,
		contentWidth: number,
		contentHeight: number,
		width: number,
		height: number,
		result: Rectangle
	): Rectangle {
		super.getFocusedChildClippingRect(
			focused,
			contentX,
			contentY,
			contentWidth,
			contentHeight,
			width,
			height,
			result
		);

		const cell = this.toCell(focused);
		if (cell) {
			// X
			const dx = contentX + this.toFrozenCellX(cell) - result.x;
			if (0 < dx) {
				result.x += dx;
				result.width -= dx;
			}

			// Y
			if (cell.parent.parent === this.body) {
				const dy = this.getBodyOffset();
				result.y += dy;
				result.height -= dy;
			}
		}

		// Done
		return result;
	}

	protected toFrozenCellX(cell: DBase): number {
		const frozen = this.frozen;
		if (0 < frozen) {
			const cells = cell.parent.children as DBase[];
			const cellIndex = cells.indexOf(cell);
			if (0 <= cellIndex) {
				const cellsLength = cells.length;
				const columnIndex = cellsLength - 1 - cellIndex;
				if (frozen <= columnIndex) {
					const cellFrozen = cells[cellsLength - frozen];
					return cellFrozen.position.x + cellFrozen.width;
				}
			}
		}
		return 0;
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		UtilKeyboardEvent.moveFocusHorizontally(e, this);
		const isArrowUpKey = UtilKeyboardEvent.isArrowUpKey(e);
		const isArrowDownKey = UtilKeyboardEvent.isArrowDownKey(e);
		if (isArrowUpKey || isArrowDownKey) {
			this.onKeyDownArrowUpOrDown(e, isArrowDownKey);
		}
		return super.onKeyDown(e);
	}

	protected onKeyDownArrowUpOrDown(e: KeyboardEvent, isDown: boolean): boolean {
		const layer = DApplications.getLayer(this);
		if (layer == null) {
			return false;
		}

		const focusController = layer.getFocusController();
		const oldFocusable = focusController.get();
		if (oldFocusable == null) {
			return false;
		}

		const oldCell = this.toCell(oldFocusable);
		if (oldCell == null) {
			return false;
		}

		const oldRow = oldCell.parent;
		if (oldRow == null) {
			return false;
		}

		const newRowChild = focusController.find(oldRow, false, false, isDown, this);
		if (newRowChild == null) {
			return false;
		}

		const newCellSibling = this.toCell(newRowChild);
		if (newCellSibling == null) {
			return false;
		}

		const newRow = newCellSibling.parent;
		if (newRow == null) {
			return false;
		}

		const oldCellIndex = oldRow.children.indexOf(oldCell);
		if (oldCellIndex < 0) {
			return false;
		}

		const newCell = newRow.children[oldCellIndex];
		if (newCell == null || newCell === oldCell || !("state" in newCell)) {
			return false;
		}

		const newFocusable = focusController.find(newCell, true, true, isDown, this);
		if (newFocusable == null) {
			return false;
		}

		focusController.focus(newFocusable);
		return true;
	}

	protected toCell(focused: DFocusable): DBase | null {
		let current: DFocusable | DFocusableContainer | null = focused;
		while (current != null) {
			const parent: DFocusableContainer | null = current.parent;
			if (parent instanceof DTableRow) {
				if (current instanceof DBase) {
					return current;
				}
				return null;
			}
			current = parent;
		}
		return null;
	}

	protected getType(): string {
		return "DTable";
	}
}
