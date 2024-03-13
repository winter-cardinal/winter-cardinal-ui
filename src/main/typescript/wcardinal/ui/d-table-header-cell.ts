/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, Point } from "pixi.js";
import { DImage, DImageOptions, DThemeImage } from "./d-image";
import { DTableState } from "./d-table-state";
import { DTableColumn } from "./d-table-column";
import { DTableDataComparator, DTableDataOrder, DTableDataSorter } from "./d-table-data-sorter";
import { DTableHeaderTable } from "./d-table-header";
import { DTableHeaderCellCheck, DTableHeaderCellCheckOptions } from "./d-table-header-cell-check";
import { UtilKeyboardEvent } from "./util/util-keyboard-event";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { DBaseStateSet } from "./d-base-state-set";
import { DTableCellEdge } from "./d-table-cell-edge";

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
	protected _edge: DTableCellEdge<DTableHeaderCell<ROW>>;

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
		this._edge = new DTableCellEdge<DTableHeaderCell<ROW>>(
			this._header,
			this,
			columnIndex,
			this.theme.getEdgeWidth()
		);

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
		if (!this._edge.onDown(e)) {
			super.onDown(e);
		}
	}

	protected override onOver(e: InteractionEvent): void {
		super.onOver(e);
		this._edge.onOver(e);
	}

	protected override onOut(e: InteractionEvent): void {
		super.onOut(e);
		this._edge.onOut(e);
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

	protected onClick(e: InteractionEvent): void {
		if (this.state.isActionable) {
			this.activate(e);
		}
	}

	activate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		this.onActivate(e);
	}

	protected onActivate(e?: InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent): void {
		if (!this._edge.isClicked(e)) {
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
