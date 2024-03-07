/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Rectangle, utils } from "pixi.js";
import { DBase } from "./d-base";
import {
	DLayoutHorizontal,
	DLayoutHorizontalOptions,
	DThemeLayoutHorizontal
} from "./d-layout-horizontal";
import { DTableState } from "./d-table-state";

export interface DTableRowOptions<THEME extends DThemeTableRow = DThemeTableRow>
	extends DLayoutHorizontalOptions<THEME> {}

export interface DThemeTableRow extends DThemeLayoutHorizontal {}

export interface DTableRowColumn extends utils.EventEmitter {
	weight?: number;
	width?: number;
	frozen?: boolean;
	offset: number;
}

export abstract class DTableRow<
	ROW,
	COLUMN extends DTableRowColumn,
	THEME extends DThemeTableRow = DThemeTableRow,
	OPTIONS extends DTableRowOptions<THEME> = DTableRowOptions<THEME>
> extends DLayoutHorizontal<THEME, OPTIONS> {
	protected _columns: COLUMN[];
	protected _frozen: number;

	constructor(columns: COLUMN[], frozen: number, options?: OPTIONS) {
		super(options);

		this._reverse = true;
		this._frozen = frozen;
		this._columns = columns;
	}

	protected initCells(): void {
		const columns = this._columns;
		const frozen = this._frozen;
		const options = this._options;
		const iend = this.toIndexEnd(columns);
		for (let i = columns.length - 1; 0 <= i; --i) {
			const cell = this.newCell(i, columns[i], columns, options);
			const cellState = cell.state;
			cellState.lock(false);
			if (i === 0) {
				cellState.add(DTableState.START);
			}
			if (i === iend) {
				cellState.add(DTableState.END);
			}
			if (i < frozen) {
				cellState.add(DTableState.FROZEN);
			}
			if (i === frozen - 1) {
				cellState.add(DTableState.FROZEN_END);
			}
			cellState.unlock();
			this.addChild(cell);
		}
	}

	protected toIndexEnd(columns: COLUMN[]): number {
		const imax = columns.length;
		for (let i = 0; i < imax; ++i) {
			const column = columns[i];
			if (column.weight !== undefined) {
				return imax - 1;
			}
		}
		return imax;
	}

	protected onRefit(): void {
		super.onRefit();
		this.resetFrozenCellPosition();
	}

	updateFrozenCellPosition(x: number): void {
		const columns = this._columns;
		const cells = this.children;
		const cellsLength = cells.length;
		const frozen = this._frozen;
		for (let i = 0; i < frozen; ++i) {
			const column = columns[i];
			const cell = cells[cellsLength - 1 - i];
			cell.position.x = -x + column.offset;
		}
	}

	protected resetFrozenCellPosition(): void {
		const columns = this._columns;
		const cells = this.children;
		const cellsLength = cells.length;
		const frozen = this._frozen;
		const x = this.getContentPositionX();
		for (let i = 0; i < frozen; ++i) {
			const column = columns[i];
			const cell = cells[cellsLength - 1 - i];
			column.offset = cell.position.x;
			cell.position.x = -x + column.offset;
		}
	}

	protected abstract getContentPositionX(): number;

	getClippingRect(target: unknown, result: Rectangle): void {
		super.getClippingRect(target, result);

		const frozen = this._frozen;
		if (0 < frozen) {
			const cell = target as any;
			if (cell && cell.parent === this) {
				const cells = this.children as DBase[];
				const cellIndex = cells.indexOf(cell);
				if (0 <= cellIndex) {
					const columnIndex = cells.length - 1 - cellIndex;
					if (frozen <= columnIndex) {
						const previous = cells[cellIndex + 1];
						const shiftX = previous.position.x + previous.width;
						result.x += shiftX;
						result.width -= shiftX;
					}
				}
			}
		}
	}

	protected abstract newCell(
		columnIndex: number,
		column: COLUMN,
		columns: COLUMN[],
		options?: OPTIONS
	): DBase;

	protected getType(): string {
		return "DTableRow";
	}
}
