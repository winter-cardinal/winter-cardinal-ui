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
	protected _nresizable: number;

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
		this._nresizable = column.resizable ? 1 : 0;

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

	get resizable(): boolean {
		return 0 < this._nresizable;
	}

	get weight(): number | undefined {
		return this._weight;
	}

	set weight(weight: number) {
		const oldWeight = this._weight;
		const nresizable = this._nresizable;
		if (0 < nresizable && oldWeight != null && oldWeight !== weight) {
			const columns = this._columns;
			const columnsLength = columns.length;
			const minWeight = this.minWeight;
			const newWeight = Math.max(minWeight, weight);
			if (this._weight !== newWeight) {
				this._isLocked = true;
				if (minWeight < oldWeight) {
					const columnWeightRatio = (newWeight - minWeight) / (oldWeight - minWeight);
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWeight = column.weight;
						if (column.resizable && columnWeight != null) {
							column.weight = columnWeight * columnWeightRatio;
						}
					}
				} else {
					const newColumnWeight = (newWeight - minWeight) / this._nresizable;
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWeight = column.weight;
						if (column.resizable && columnWeight != null) {
							column.weight = newColumnWeight;
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
			if (!column.resizable && columnWeight != null) {
				result += columnWeight;
			}
		}
		return result;
	}

	get width(): number | undefined {
		return this._width;
	}

	set width(width: number) {
		const oldWidth = this._width;
		const nresizable = this._nresizable;
		if (0 < nresizable && oldWidth != null && oldWidth !== width) {
			const columns = this._columns;
			const columnsLength = columns.length;
			const minWidth = this.minWidth;
			const newWidth = Math.max(minWidth, width);
			if (oldWidth !== newWidth) {
				this._isLocked = true;
				if (minWidth < oldWidth) {
					const columnWidthRatio = (newWidth - minWidth) / (oldWidth - minWidth);
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWidth = column.width;
						if (column.resizable && columnWidth != null) {
							column.width = columnWidth * columnWidthRatio;
						}
					}
				} else {
					const newColumnWidth = (newWidth - minWidth) / this._nresizable;
					for (let i = 0; i < columnsLength; ++i) {
						const column = columns[i];
						const columnWidth = column.width;
						if (column.resizable && columnWidth != null) {
							column.width = newColumnWidth;
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
			if (!column.resizable && columnWidth != null) {
				result += columnWidth;
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
				if (column.resizable) {
					this._nresizable += 1;
				}
				column.on("resize", this._onResizeBound);
			}
		} else if (this._width != null) {
			const width = column.width;
			if (width != null) {
				this._width += width;
				if (column.resizable) {
					this._nresizable += 1;
				}
				column.on("resize", this._onResizeBound);
			}
		}
	}
}
