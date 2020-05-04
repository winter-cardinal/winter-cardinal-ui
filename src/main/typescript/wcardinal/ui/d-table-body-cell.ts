/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellColumnOptions<ROW> {
	index: number;
	data: DTableColumn<ROW>;
}

export interface DTableBodyCellOptions<ROW> {
	column: DTableBodyCellColumnOptions<ROW>;
}

export interface DTableBodyCell<ROW> {
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

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void;
	unset(): void;
}
