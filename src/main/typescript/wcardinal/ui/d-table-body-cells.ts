/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "./d-base-state-set";
import { DTableColumnEditable } from "./d-table-column-editing";
import { DTableColumnRenderable } from "./d-table-column-renderable";

export interface DTableBodyCellsColumnEditing<ROW> {
	enable: boolean | DTableColumnEditable<ROW>;
}

export interface DTableBodyCellsColumn<ROW> {
	editing: DTableBodyCellsColumnEditing<ROW>;
	renderable: boolean | DTableColumnRenderable<ROW>;
}

export interface DTableBodyCellsTarget {
	renderable: boolean;
	state: DBaseStateSet;
}

export class DTableBodyCells {
	static setReadOnly<ROW>(
		target: DTableBodyCellsTarget,
		row: ROW,
		columnIndex: number,
		column: DTableBodyCellsColumn<ROW>
	): void {
		target.state.isReadOnly = this.toReadOnly(row, columnIndex, column);
	}

	static setRenderable<ROW>(
		target: DTableBodyCellsTarget,
		row: ROW,
		columnIndex: number,
		column: DTableBodyCellsColumn<ROW>
	): void {
		const renderable = this.toRenderable(row, columnIndex, column);
		target.renderable = renderable;
		target.state.isDisabled = !renderable;
	}

	static toReadOnly<ROW>(
		row: ROW,
		columnIndex: number,
		column: DTableBodyCellsColumn<ROW>
	): boolean {
		const enable = column.editing.enable;
		if (enable === true) {
			return false;
		} else if (enable === false) {
			return true;
		} else {
			return !enable(row, columnIndex);
		}
	}
	static toRenderable<ROW>(
		row: ROW,
		columnIndex: number,
		column: DTableBodyCellsColumn<ROW>
	): boolean {
		const renderable = column.renderable;
		if (renderable === true) {
			return true;
		} else if (renderable === false) {
			return false;
		} else {
			return renderable(row, columnIndex);
		}
	}
}
