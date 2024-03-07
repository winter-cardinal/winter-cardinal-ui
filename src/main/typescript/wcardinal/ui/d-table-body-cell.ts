/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, Point } from "pixi.js";
import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";
import { DTableDataSupplimental } from "./d-table-data";

export type DTableBodyCellOnChange<ROW, VALUE = unknown, EMITTER = any> = (
	newValue: VALUE,
	oldValue: VALUE,
	row: ROW,
	rowIndex: number,
	columnIndex: number,
	column: DTableColumn<ROW, VALUE>,
	emitter: EMITTER
) => void;

export interface DTableBodyCell<ROW, VALUE = unknown> extends DBase {
	/**
	 * A row data if exists.
	 * Otherwise, Undefined.
	 *
	 * @returns a row data or undefined.
	 */
	readonly row?: ROW;

	/**
	 * A row index if a row data exists.
	 * Otherise, -1.
	 *
	 * @returns a row index or -1.
	 */
	readonly rowIndex: number;

	/**
	 * A column index.
	 */
	readonly columnIndex: number;

	/**
	 * A column.
	 */
	readonly column: DTableColumn<ROW, VALUE>;

	set(
		value: unknown,
		row: ROW,
		supplimental: DTableDataSupplimental | null,
		rowIndex: number,
		columnIndex: number,
		forcibly?: boolean
	): void;
	unset(): void;

	/**
	 * Called when the selection type is not {@link DTableDataSelectionType}'s NONE
	 * and a cell is clicked. Returning true will prevent the row selection.
	 * Otherwise, a clicked row will be selected.
	 *
	 * @param e
	 * @param local
	 * @return true to prevent the row selection
	 */
	onRowSelect?(e: InteractionEvent, local: Point): boolean;
}
