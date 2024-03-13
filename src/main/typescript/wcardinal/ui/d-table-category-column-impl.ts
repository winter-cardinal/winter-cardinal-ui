/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { utils } from "pixi.js";
import { DTableCategoryColumn } from "./d-table-category-column";
import { DTableColumn } from "./d-table-column";
import { isString } from "./util/is-string";
import { DTableColumnSelectingDialog } from "./d-table-column-selecting";

export class DTableCategoryColumnImpl<
		ROW_VALUE,
		CELL_VALUE,
		DIALOG_VALUE = CELL_VALUE,
		DIALOG extends
			DTableColumnSelectingDialog<DIALOG_VALUE> = DTableColumnSelectingDialog<DIALOG_VALUE>
	>
	extends utils.EventEmitter
	implements DTableCategoryColumn
{
	label: string | undefined;
	protected _weight: number | undefined;
	protected _width: number | undefined;
	protected _isLocked: boolean;
	offset: number;
	protected _columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[];
	readonly resizable: boolean;

	protected _onResizeBound: (
		column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
	) => void;

	constructor(index: number, column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>) {
		super();

		// Label
		const category = column.category;
		if (category) {
			if (isString(category)) {
				if (index === 0) {
					this.label = category;
				}
			} else {
				if (index < category.length) {
					this.label = category[index];
				}
			}
		}

		this._weight = column.weight;
		this._width = column.width;
		this._isLocked = false;
		this.offset = 0.0;
		this._columns = [column];
		this.resizable = column.resizable;

		const onResizeBound = (): void => {
			this.onResize();
		};
		this._onResizeBound = onResizeBound;
		column.on("resize", onResizeBound);
	}

	protected onResize(): void {
		if (this._isLocked) {
			return;
		}
		const columns = this._columns;
		if (this._weight != null) {
			let newWeight = 0;
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				const weight = columns[i].weight;
				if (weight != null) {
					newWeight += weight;
				}
			}
			if (this._weight !== newWeight) {
				this._weight = newWeight;
				this.emit("resize", this);
			}
		} else {
			let newWidth = 0;
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				const width = columns[i].width;
				if (width != null) {
					newWidth += width;
				}
			}
			if (this._width !== newWidth) {
				this._width = newWidth;
				this.emit("resize", this);
			}
		}
	}

	get weight(): number | undefined {
		return this._weight;
	}

	set weight(weight: number) {
		const oldWeight = this._weight;
		if (oldWeight != null && oldWeight !== weight) {
			const columns = this._columns;
			const columnsLength = columns.length;
			const minWeight = this.minWeight;
			const newWeight = Math.max(minWeight, weight);
			if (this._weight !== newWeight) {
				this._isLocked = true;
				if (minWeight < oldWeight) {
					// TODO: IMPROVE THIS
					const columnWeightRatio = newWeight / oldWeight;
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWeight = column.weight;
						if (columnWeight != null) {
							column.weight = Math.max(
								column.minWeight,
								columnWeight * columnWeightRatio
							);
						}
					}
				} else {
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWeight = column.weight;
						if (columnWeight != null) {
							column.weight = column.minWeight;
						}
					}
				}
				this._isLocked = false;
				this.onResize();
			}
		}
	}

	get minWeight(): number {
		let result = 0;
		const columns = this._columns;
		const columnsLength = columns.length;
		for (let i = 0; i < columnsLength; ++i) {
			const column = columns[i];
			const columnWeight = column.weight;
			if (columnWeight != null) {
				result += column.minWeight;
			}
		}
		return result;
	}

	get width(): number | undefined {
		return this._width;
	}

	set width(width: number) {
		const oldWidth = this._width;
		if (oldWidth != null && oldWidth !== width) {
			const columns = this._columns;
			const columnsLength = columns.length;
			const minWidth = this.minWidth;
			const newWidth = Math.max(minWidth, width);
			if (oldWidth !== newWidth) {
				this._isLocked = true;
				if (minWidth < oldWidth) {
					// TODO: IMPROVE THIS
					const columnWidthRatio = newWidth / oldWidth;
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWidth = column.width;
						if (columnWidth != null) {
							column.width = Math.max(
								column.minWidth,
								columnWidth * columnWidthRatio
							);
						}
					}
				} else {
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWidth = column.width;
						if (columnWidth != null) {
							column.width = column.minWidth;
						}
					}
				}
				this._isLocked = false;
				this.onResize();
			}
		}
	}

	get minWidth(): number {
		let result = 0;
		const columns = this._columns;
		const columnsLength = columns.length;
		for (let i = 0; i < columnsLength; ++i) {
			const column = columns[i];
			const columnWidth = column.width;
			if (columnWidth != null) {
				result += column.minWidth;
			}
		}
		return result;
	}

	add(column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>): void {
		this._columns.push(column);
		if (this._weight != null) {
			const weight = column.weight;
			if (weight != null) {
				this._weight += weight;
				column.on("resize", this._onResizeBound);
			}
		} else if (this._width != null) {
			const width = column.width;
			if (width != null) {
				this._width += width;
				column.on("resize", this._onResizeBound);
			}
		}
	}
}
