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

export interface DTableHeaderCellHeader<ROW> {
	readonly table: DTableHeaderTable<ROW> | null;
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	header?: DTableHeaderCellHeader<ROW>;
	column?: DTableColumn<ROW, unknown>;
	columnIndex?: number;
	check?: DTableHeaderCellCheckOptions;
}

export interface DThemeTableHeaderCell extends DThemeImage<string | null> {
	getMinWidth(): number;
	getResizeWidth(): number;
}

export class DTableHeaderCell<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell,
	OPTIONS extends DTableHeaderCellOptions<ROW, THEME> = DTableHeaderCellOptions<ROW, THEME>
> extends DImage<string | null, THEME, OPTIONS> {
	protected _sorter?: DTableDataSorter<ROW>;
	protected _onSorterChangeBound?: () => void;
	protected _header?: DTableHeaderCellHeader<ROW>;
	protected _column?: DTableColumn<ROW, unknown>;
	protected _columnIndex?: number;
	protected _check!: DTableHeaderCellCheck<ROW>;
	protected _checkWork?: Point;
	protected _onCellResizeBound: (e: InteractionEvent) => void;
	protected _onCellUpBound: (e: InteractionEvent) => void;
	protected _onCellHoverBound: (e: InteractionEvent) => void;
	protected _interactionManager?: InteractionManager;
	protected _isResizing?: boolean;

	constructor(options?: OPTIONS) {
		super(options);
		this._onCellResizeBound = (e: InteractionEvent): void => {
			this.onCellResize(e);
		};

		this._onCellUpBound = (e: InteractionEvent): void => {
			this.onCellUp(e);
		};

		this._onCellHoverBound = (e: InteractionEvent): void => {
			this.onCellHover(e);
		};
	}
	protected init(options?: OPTIONS): void {
		if (options != null) {
			this._header = options.header;
			this._column = options.column;
			this._columnIndex = options.columnIndex;
			this._check = new DTableHeaderCellCheck<ROW>(this, options.check);
		} else {
			this._check = new DTableHeaderCellCheck<ROW>(this);
		}
		super.init(options);
		this.initOnClick(options);

		if (this.isResizable) {
			this.on(UtilPointerEvent.down, (e: InteractionEvent) => {
				this.onCellDown(e);
			});

			this.on(UtilPointerEvent.move, (e: InteractionEvent) => {
				this.onCellHover(e);
			});
		}
	}

	get column(): DTableColumn<ROW, unknown> | undefined {
		return this._column;
	}

	get columnIndex(): number | undefined {
		return this._columnIndex;
	}

	get header(): DTableHeaderCellHeader<ROW> | undefined {
		return this._header;
	}

	get check(): DTableHeaderCellCheck<ROW> {
		return this._check;
	}

	protected initOnClick(options?: OPTIONS): void {
		const column = this._column;
		if (column) {
			const sortable = column.sorting.enable;
			const checkable = this._check.isEnabled;
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
		const column = this._column;
		if (column) {
			return column.sorting.comparator || null;
		}
		return null;
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
		const checkWork = this._checkWork || new Point();
		this._checkWork = checkWork;
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

	protected onClick(e: InteractionEvent): void {
		if (this.state.isActionable) {
			this.activate(e);
		}
	}

	activate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.onActivate(e);
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		if (this.isCheckClicked(e)) {
			this.onToggleStart();
			this.onToggleEnd();
		} else {
			if (e instanceof InteractionEvent) {
				if (this.isResizable && !this._isResizing) {
					this.doSort(e);
				}
			} else {
				this.doSort(e);
			}
			this.emit("active", this);
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
		const column = this._column;
		if (column) {
			return column.sorting.enable;
		}
		return false;
	}

	get isToggle(): boolean {
		return this._check.isEnabled;
	}

	get isResizable(): boolean {
		const column = this._column;
		if (column) {
			const resizable = column.resizable;
			if (resizable != null) {
				return resizable;
			}
		}
		return false;
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

	protected onCellDown(e: InteractionEvent): void {
		if (!this.isOnEdge(e) || this._isResizing) return;
		const layer = DApplications.getLayer(this);
		if (layer) {
			this._isResizing = true;
			const interactionManager = layer.renderer.plugins.interaction;
			this._interactionManager = interactionManager;
			const onCellResizeBound = this._onCellResizeBound;
			interactionManager.on(UtilPointerEvent.move, onCellResizeBound);
			const onCellUpBound = this._onCellUpBound;
			interactionManager.on(UtilPointerEvent.up, onCellUpBound);
			interactionManager.on(UtilPointerEvent.upoutside, onCellUpBound);
			interactionManager.on(UtilPointerEvent.cancel, onCellUpBound);
		}
	}

	protected onCellResize(e: InteractionEvent): void {
		const point = new Point(0, 0);
		this.toLocal(e.data.global, undefined, point);
		const oldWidth = this.width;
		const newWidth = Math.max(this.theme.getMinWidth(), point.x);
		const ratio = newWidth / oldWidth;
		this.width = newWidth;
		let isWeight = false;
		if (this.weight > 0) {
			this.weight = this.weight * ratio;
			isWeight = true;
		}
		this.emit("resize", newWidth, isWeight, this);
	}

	protected onCellUp(e: InteractionEvent): void {
		if (!this._isResizing) return;
		this._isResizing = false;
		const interactionManager = this._interactionManager;
		if (interactionManager) {
			this._interactionManager = undefined;
			const onCellResizeBound = this._onCellResizeBound;
			interactionManager.off(UtilPointerEvent.move, onCellResizeBound);
			const onCellUpBound = this._onCellUpBound;
			interactionManager.off(UtilPointerEvent.up, onCellUpBound);
			interactionManager.off(UtilPointerEvent.upoutside, onCellUpBound);
			interactionManager.off(UtilPointerEvent.cancel, onCellUpBound);
		}
	}

	protected isOnEdge(e: InteractionEvent): boolean {
		const local = this.toLocal(e.data.global);
		const localBounds = this.getLocalBounds();
		const isInWidthRange = local.x >= 0 && local.x <= localBounds.width;
		const isInHeightRange = local.y >= 0 && local.y <= localBounds.height;
		if (isInHeightRange && isInWidthRange) {
			const isOnEdge = localBounds.width - local.x < this.theme.getResizeWidth();
			return isOnEdge;
		}
		return false;
	}

	protected onCellHover(e: InteractionEvent): void {
		if (!this._isResizing) {
			if (this.isOnEdge(e)) {
				this.cursor = "col-resize";
			} else {
				this.cursor = this.isSortable ? "pointer" : "default";
			}
		}
	}
}
