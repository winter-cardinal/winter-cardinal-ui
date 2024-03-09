/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Point } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DTableState } from "./d-table-state";
import { DTableColumn } from "./d-table-column";
import { DTableDataComparator, DTableDataOrder, DTableDataSorter } from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
import { DTableHeaderCellCheck, DTableHeaderCellCheckOptions } from "./d-table-header-cell-check";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DApplications } from "./d-applications";
import { DBaseStateSet } from "./d-base-state-set";

export interface DTableHeaderCellHeader<ROW> {
	readonly table: DTableHeaderTable<ROW> | null;
	readonly children: DTableHeaderCell<ROW>[];
	readonly state: DBaseStateSet;
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	check?: DTableHeaderCellCheckOptions;
}

export interface DThemeTableHeaderCell extends DThemeImage<string | null> {
	getEdgeWidth(): number;
}

export const DTableHeaderCellEdge = {
	NONE: 0,
	LEFT: 1,
	RIGHT: 2,
	BOTH: 3
} as const;

export type DTableHeaderCellEdge = (typeof DTableHeaderCellEdge)[keyof typeof DTableHeaderCellEdge];

export class DTableHeaderCell<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _sorter?: DTableDataSorter<ROW>;
	protected _onSorterChangeBound?: () => void;
	protected _header: DTableHeaderCellHeader<ROW>;
	protected _column: DTableColumn<ROW>;
	protected _columnIndex: number;
	protected _check: DTableHeaderCellCheck<ROW>;
	protected _checkWork?: Point;
	protected _resizeWork?: Point;
	protected _onHoveredBound?: (e: InteractionEvent) => void;
	protected _resizableEdges?: DTableHeaderCellEdge;
	protected _edgeSize: number;
	protected _wasResizing: boolean;

	constructor(
		header: DTableHeaderCellHeader<ROW>,
		columnIndex: number,
		column: DTableColumn<ROW>,
		options?: OPTIONS
	) {
		super(options);
		this._header = header;
		this._column = column;
		this._columnIndex = columnIndex;
		const check = new DTableHeaderCellCheck<ROW>(this, options?.check);
		this._check = check;
		this._edgeSize = this.theme.getEdgeWidth();
		this._wasResizing = false;

		const sortable = column.sorting.enable;
		const checkable = check.isEnabled;
		if (checkable || sortable) {
			this.on(UtilPointerEvent.tap, (e: InteractionEvent): void => {
				this.onClick(e);
			});
			const state = this.state;
			state.lock();
			state.set(DTableState.SORTABLE, sortable);
			state.set(DTableState.CHECKABLE, checkable);
			state.unlock();
		}
	}

	get column(): DTableColumn<ROW> {
		return this._column;
	}

	get columnIndex(): number {
		return this._columnIndex;
	}

	get header(): DTableHeaderCellHeader<ROW> {
		return this._header;
	}

	get check(): DTableHeaderCellCheck<ROW> {
		return this._check;
	}

	protected override onDown(e: InteractionEvent): void {
		const edges = this.state.valueOf(DTableState.HOVERED_ON_EDGE);
		if (edges != null) {
			this._wasResizing = true;
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				const interactionManager = layer.renderer.plugins.interaction;
				const columnIndex = this._columnIndex;
				if (edges === DTableHeaderCellEdge.LEFT) {
					this.onDownEdge(e.data.global.x, columnIndex - 1, interactionManager);
				} else {
					this.onDownEdge(e.data.global.x, columnIndex, interactionManager);
				}
			}
		} else {
			this._wasResizing = false;
			super.onDown(e);
		}
	}

	protected findLeftResizableCell(columnIndex: number): DTableHeaderCell<ROW> | null {
		const children = this._header.children;
		const childrenLength = children.length;
		for (let i = columnIndex; 0 <= i; --i) {
			const child = children[childrenLength - i - 1];
			if (child.column.resizable) {
				return child;
			}
		}
		return null;
	}

	protected findRightResizableCellOfWeight(columnIndex: number): DTableHeaderCell<ROW> | null {
		const children = this._header.children;
		const childrenLength = children.length;
		for (let i = columnIndex + 1; i < childrenLength; ++i) {
			const child = children[childrenLength - i - 1];
			const childColumn = child.column;
			if (childColumn.resizable) {
				const childColumnWeight = childColumn.weight;
				if (childColumnWeight != null) {
					return child;
				}
			}
		}
		return null;
	}

	protected checkIfEdgeResizable(columnIndex: number): boolean {
		const target = this.findLeftResizableCell(columnIndex);
		if (target != null) {
			if (target.column.weight != null) {
				return this.findRightResizableCellOfWeight(target.columnIndex) != null;
			} else {
				return true;
			}
		}
		return false;
	}

	protected getResizableEdges(): DTableHeaderCellEdge {
		let result = this._resizableEdges;
		if (result == null) {
			const columnIndex = this._columnIndex;
			if (this.checkIfEdgeResizable(columnIndex - 1)) {
				if (this.checkIfEdgeResizable(columnIndex)) {
					result = DTableHeaderCellEdge.BOTH;
				} else {
					result = DTableHeaderCellEdge.LEFT;
				}
			} else {
				if (this.checkIfEdgeResizable(columnIndex)) {
					result = DTableHeaderCellEdge.RIGHT;
				} else {
					result = DTableHeaderCellEdge.NONE;
				}
			}
			this._resizableEdges = result;
		}
		return result;
	}

	protected override onOver(e: InteractionEvent): void {
		super.onOver(e);

		if (this.getResizableEdges() !== DTableHeaderCellEdge.NONE) {
			const onHoveredBound = (this._onHoveredBound ??= (event: InteractionEvent): void => {
				this.onHovered(event);
			});
			this.on(UtilPointerEvent.move, onHoveredBound);

			// Since the cursor is set by InteractionManager before this method is called,
			// the cursor need to be overriden.
			this.onHovered(e);
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				layer.renderer.plugins.interaction.cursor = this.cursor;
			}
		}
	}

	protected override onOut(e: InteractionEvent): void {
		super.onOut(e);

		const onHoveredBound = this._onHoveredBound;
		if (onHoveredBound != null) {
			this.state.remove(DTableState.HOVERED_ON_EDGE);
			this.off(UtilPointerEvent.move, onHoveredBound);
		}
	}

	protected onHovered(e: InteractionEvent): void {
		const width = this.width;
		const x = this.toClickPosition(e);
		const edgeSize = this._edgeSize;
		if (0 <= x && x <= edgeSize) {
			if (this.getResizableEdges() & DTableHeaderCellEdge.LEFT) {
				this.state.add(DTableState.HOVERED_ON_EDGE, DTableHeaderCellEdge.LEFT);
			} else {
				this.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else if (width - edgeSize <= x && x <= width) {
			if (this.getResizableEdges() & DTableHeaderCellEdge.RIGHT) {
				this.state.add(DTableState.HOVERED_ON_EDGE, DTableHeaderCellEdge.RIGHT);
			} else {
				this.state.remove(DTableState.HOVERED_ON_EDGE);
			}
		} else {
			this.state.remove(DTableState.HOVERED_ON_EDGE);
		}
	}

	protected onDownEdge(
		onDownPoint: number,
		columnIndex: number,
		interactionManager: InteractionManager
	): void {
		// Find the resizable cell
		const left = this.findLeftResizableCell(columnIndex);
		if (left == null) {
			// No resizable cell
			return;
		}

		const header = this._header;
		const leftColumn = left.column;
		const leftOldWidth = left.width;
		const leftOldWeight = left.weight;
		if (leftColumn.weight == null) {
			header.state.add(DTableState.RESIZING);
			const onMove = (e: InteractionEvent): void => {
				leftColumn.width = Math.max(1, leftOldWidth + e.data.global.x - onDownPoint);
			};
			const onUp = (e: InteractionEvent) => {
				header.state.remove(DTableState.RESIZING);
				interactionManager.off(UtilPointerEvent.move, onMove);
				interactionManager.off(UtilPointerEvent.up, onUp);
				interactionManager.off(UtilPointerEvent.upoutside, onUp);
				interactionManager.off(UtilPointerEvent.cancel, onUp);
			};
			interactionManager.on(UtilPointerEvent.move, onMove);
			interactionManager.on(UtilPointerEvent.up, onUp);
			interactionManager.on(UtilPointerEvent.upoutside, onUp);
			interactionManager.on(UtilPointerEvent.cancel, onUp);
		} else {
			const right = this.findRightResizableCellOfWeight(left.columnIndex);
			if (right == null) {
				// No right resizable cell found
				return;
			}
			const rightColumn = right.column;
			const rightOldWeight = right.weight;
			const rightOldWidth = right.width;
			const totalWidth = leftOldWidth + rightOldWidth;
			const totalWeight = leftOldWeight + rightOldWeight;
			if (totalWidth <= 0) {
				// The left and right resizable cells doesn't have non-zero width
				return;
			}
			header.state.add(DTableState.RESIZING);
			const onMove = (e: InteractionEvent): void => {
				const leftNewWidth = Math.max(
					0,
					Math.min(totalWidth, leftOldWidth + e.data.global.x - onDownPoint)
				);
				const leftNewWeight = totalWeight * (leftNewWidth / totalWidth);
				leftColumn.weight = leftNewWeight;
				rightColumn.weight = totalWeight - leftNewWeight;
			};
			const onUp = (e: InteractionEvent) => {
				header.state.remove(DTableState.RESIZING);
				interactionManager.off(UtilPointerEvent.move, onMove);
				interactionManager.off(UtilPointerEvent.up, onUp);
				interactionManager.off(UtilPointerEvent.upoutside, onUp);
				interactionManager.off(UtilPointerEvent.cancel, onUp);
			};
			interactionManager.on(UtilPointerEvent.move, onMove);
			interactionManager.on(UtilPointerEvent.up, onUp);
			interactionManager.on(UtilPointerEvent.upoutside, onUp);
			interactionManager.on(UtilPointerEvent.cancel, onUp);
		}
	}

	get sorter(): DTableDataSorter<ROW> | null {
		let sorter = this._sorter;
		if (sorter == null) {
			const header = this._header;
			if (header) {
				const table = header.table;
				if (table) {
					sorter = table.data.sorter;
					this._sorter = sorter;
					this._onSorterChangeBound =
						this._onSorterChangeBound ||
						(() => {
							this.onSorterChange();
						});
					sorter.on("change", this._onSorterChangeBound);
				} else {
					return null;
				}
			} else {
				return null;
			}
		}
		return sorter;
	}

	get comparator(): DTableDataComparator<ROW> | null {
		return this._column.sorting.comparator || null;
	}

	protected onSorterChange(): void {
		const comparator = this.comparator;
		if (comparator) {
			const sorter = this._sorter;
			if (sorter) {
				const SORTED_ASCENDING = DTableState.SORTED_ASCENDING;
				const SORTED_DESCENDING = DTableState.SORTED_DESCENDING;
				if (sorter.isApplied() && sorter.get() === comparator) {
					if (sorter.order === DTableDataOrder.ASCENDING) {
						this.state.set(SORTED_ASCENDING, SORTED_DESCENDING);
					} else {
						this.state.set(SORTED_DESCENDING, SORTED_ASCENDING);
					}
				} else {
					this.state.removeAll(SORTED_ASCENDING, SORTED_DESCENDING);
				}
			}
		}
	}

	protected toClickPosition(e: InteractionEvent): number {
		const checkWork = (this._checkWork ??= new Point());
		return e.data.getLocalPosition(this, checkWork).x;
	}

	protected isCheckClicked(
		e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): boolean {
		if (e instanceof InteractionEvent && this._check.isEnabled) {
			if (this.isSortable) {
				const image = this.image.get(1);
				if (image) {
					const position = this.toClickPosition(e);
					const object = image.object;
					if (object != null) {
						const bound = object.getLocalBounds();
						const margin = image.margin.horizontal;
						const x = object.x;
						return (
							x + bound.left - margin <= position &&
							position <= x + bound.right + margin
						);
					}
				}
			} else {
				return true;
			}
		}
		return false;
	}

	protected isEdgeClicked(
		e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent
	): boolean {
		return (
			e instanceof InteractionEvent &&
			(this.state.is(DTableState.HOVERED_ON_EDGE) || this._wasResizing)
		);
	}

	protected onClick(e: InteractionEvent): void {
		if (this.state.isActionable) {
			this.activate(e);
		}
	}

	activate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.onActivate(e);
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		if (!this.isEdgeClicked(e)) {
			if (this.isCheckClicked(e)) {
				this.onToggleStart();
				this.onToggleEnd();
			} else {
				this.doSort(e);
				this.emit("active", this);
			}
		}
	}

	protected doSort(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		if (this.isSortable) {
			const comparator = this.comparator;
			if (comparator) {
				const sorter = this.sorter;
				if (sorter) {
					if (sorter.get() === comparator) {
						if (sorter.order === DTableDataOrder.ASCENDING) {
							sorter.order = DTableDataOrder.DESCENDING;
							sorter.apply();
						} else {
							sorter.set(null);
							sorter.apply();
						}
					} else {
						sorter.set(comparator);
						sorter.order = DTableDataOrder.ASCENDING;
						sorter.apply();
					}
				}
			}
		}
	}

	get isSortable(): boolean {
		return this._column.sorting.enable;
	}

	get isResizable(): boolean {
		return this._column.resizable;
	}

	get isToggle(): boolean {
		return this._check.isEnabled;
	}

	toggle(): void {
		if (this.state.isActionable) {
			if (this.isToggle) {
				this.onToggleStart();
				this.onToggleEnd();
			}
		}
	}

	protected onToggleStart(): void {
		this.state.isActive = !this.state.isActive;
	}

	protected onToggleEnd(): void {
		if (this.state.isActive) {
			this._check.execute(true);
			this.emit("active", this);
		} else {
			this._check.execute(false);
			this.emit("inactive", this);
		}
	}

	protected onActivateKeyDown(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this.isToggle) {
				this.onToggleStart();
			} else {
				this.state.isPressed = true;
			}
		}
	}

	protected onActivateKeyUp(e: KeyboardEvent): void {
		if (this.state.isActionable) {
			if (this.isToggle) {
				this.onToggleEnd();
			} else {
				if (this.state.isPressed) {
					this.activate(e);
				}
				this.state.isPressed = false;
			}
		}
	}

	protected onKeyDown(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyDown(e);
		}

		return super.onKeyDown(e);
	}

	protected onKeyUp(e: KeyboardEvent): boolean {
		if (UtilKeyboardEvent.isActivateKey(e)) {
			this.onActivateKeyUp(e);
		}

		return super.onKeyUp(e);
	}

	protected getType(): string {
		return "DTableHeaderCell";
	}

	destroy(): void {
		const sorter = this._sorter;
		const onSorterChangeBound = this._onSorterChangeBound;
		if (sorter && onSorterChangeBound) {
			sorter.off("change", onSorterChangeBound);
		}
		this._sorter = undefined;
		this._onSorterChangeBound = undefined;

		super.destroy();
	}
}
