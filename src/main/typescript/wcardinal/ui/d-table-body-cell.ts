/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction } from "pixi.js";
import { DBase } from "./d-base";
import { DTableColumn } from "./d-table-column";

export interface DTableBodyCell<ROW> extends DBase {
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
	readonly column: DTableColumn<ROW>;

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void;
	unset(): void;

	onClick?( e?: interaction.InteractionEvent | KeyboardEvent | MouseEvent | TouchEvent ): void;

	/**
	 * Called when the selection type is not {@link DTableDataSelectionType.NONE}
	 * and a cell is clicked. Returning true will prevent the row selection.
	 * Otherwise, a clicked row will be selected.
	 *
	 * @param e
	 * @param x
	 * @param y
	 * @return true to prevent the row selection
	 */
	onRowSelect?( e: interaction.InteractionEvent, x: number, y: number ): boolean;
}
