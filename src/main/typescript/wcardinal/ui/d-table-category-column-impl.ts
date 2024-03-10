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
	weight: number | undefined;
	width: number | undefined;
	offset: number;
	columns: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>[];

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

		this.weight = column.weight;
		this.width = column.width;
		this.offset = 0.0;
		this.columns = [column];
		const onResizeBound = (
			c: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>
		): void => {
			this.onResize(c);
		};
		this._onResizeBound = onResizeBound;
		column.on("resize", onResizeBound);
	}

	protected onResize(column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>): void {
		const columns = this.columns;
		if (this.weight != null) {
			let newWeight = 0;
			for (let i = 0, imax = columns.length; i < imax; ++i) {
				const weight = columns[i].weight;
				if (weight != null) {
					newWeight += weight;
				}
			}
			if (this.weight !== newWeight) {
				this.weight = newWeight;
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
			if (this.width !== newWidth) {
				this.width = newWidth;
				this.emit("resize", this);
			}
		}
	}

	add(column: DTableColumn<ROW_VALUE, CELL_VALUE, DIALOG_VALUE, DIALOG>): void {
		this.columns.push(column);
		if (this.weight != null) {
			const weight = column.weight;
			if (weight != null) {
				this.weight += weight;
				column.on("resize", this._onResizeBound);
			}
		} else if (this.width != null) {
			const width = column.width;
			if (width != null) {
				this.width += width;
				column.on("resize", this._onResizeBound);
			}
		}
	}
}
