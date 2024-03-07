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
	readonly children: DTableHeaderCell<ROW>[];
}

export interface DTableHeaderCellOptions<
	ROW,
	THEME extends DThemeTableHeaderCell = DThemeTableHeaderCell
> extends DImageOptions<string | null, THEME> {
	check?: DTableHeaderCellCheckOptions;
}

export interface DThemeTableHeaderCell extends DThemeImage<string | null> {}

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
		this._check = new DTableHeaderCellCheck<ROW>(this, options?.check);
		this.initOnClick(options);
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

	protected override onDown(e: InteractionEvent): void {
		super.onDown(e);

		if (this._column.resizable) {
			const layer = DApplications.getLayer(this);
			if (layer != null) {
				const interactionManager = layer.renderer.plugins.interaction;
				const oldWidth = this.width;
				const x = this.toClickPosition(e);
				const threshold = 10;
				const columnIndex = this._columnIndex;
				if (oldWidth - threshold <= x && x <= oldWidth) {
					if (columnIndex + 1 < this._header.children.length) {
						this.onDownEdge(e.data.global.x, columnIndex, interactionManager);
					}
				} else if (0 <= x && x <= threshold) {
					if (1 <= columnIndex) {
						this.onDownEdge(e.data.global.x, columnIndex - 1, interactionManager);
					}
				}
			}
		}
	}

	protected onDownEdge(
		onDownPoint: number,
		columnIndex: number,
		interactionManager: InteractionManager
	): void {
		const children = this._header.children;
		const childrenLength = children.length;
		const target = children[childrenLength - columnIndex - 1];
		const targetColumn = target.column;

		const oldWidth = target.width;
		const oldWeight = target.weight;
		if (oldWeight < 0) {
			const onMoveBound = (e: InteractionEvent): void => {
				const newWidth = Math.max(1, oldWidth + e.data.global.x - onDownPoint);
				targetColumn.width = newWidth;
			};
			const onUpBound = () => {
				interactionManager.off(UtilPointerEvent.move, onMoveBound);
				interactionManager.off(UtilPointerEvent.up, onUpBound);
				interactionManager.off(UtilPointerEvent.upoutside, onUpBound);
			};
			interactionManager.on(UtilPointerEvent.move, onMoveBound);
			interactionManager.on(UtilPointerEvent.up, onUpBound);
			interactionManager.on(UtilPointerEvent.upoutside, onUpBound);
		} else {
			let oldWeightTotal = 0;
			let oldWidthTotal = 0;
			const oldWeights: number[] = [];
			for (let i = columnIndex + 1; i < childrenLength; ++i) {
				const child = children[childrenLength - i - 1];
				const childColumn = child.column;
				const childColumnWeight = childColumn.weight;
				if (childColumnWeight != null) {
					const childWidth = child.width;
					oldWeightTotal += childColumnWeight;
					oldWidthTotal += childWidth;
					oldWeights.push(childColumnWeight);
				}
			}
			const newWidthMin = 1;
			const newWidthMax = oldWidth + oldWidthTotal - 1;
			const onMoveBound = (e: InteractionEvent): void => {
				const newWidth = Math.max(
					newWidthMin,
					Math.min(newWidthMax, oldWidth + e.data.global.x - onDownPoint)
				);
				const newWeight = oldWeight * (newWidth / oldWidth);
				targetColumn.weight = newWeight;
				const rweight = (oldWeightTotal - (newWeight - oldWeight)) / oldWeightTotal;
				for (let i = columnIndex + 1, j = -1; i < childrenLength; ++i) {
					const child = children[childrenLength - i - 1];
					const childColumn = child.column;
					const childColumnWeight = childColumn.weight;
					if (childColumnWeight != null) {
						childColumn.weight = oldWeights[++j] * rweight;
					}
				}
			};
			const onUpBound = () => {
				interactionManager.off(UtilPointerEvent.move, onMoveBound);
				interactionManager.off(UtilPointerEvent.up, onUpBound);
				interactionManager.off(UtilPointerEvent.upoutside, onUpBound);
			};
			interactionManager.on(UtilPointerEvent.move, onMoveBound);
			interactionManager.on(UtilPointerEvent.up, onUpBound);
			interactionManager.on(UtilPointerEvent.upoutside, onUpBound);
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
		if (this.isCheckClicked(e)) {
			this.onToggleStart();
			this.onToggleEnd();
		} else {
			this.doSort(e);
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
