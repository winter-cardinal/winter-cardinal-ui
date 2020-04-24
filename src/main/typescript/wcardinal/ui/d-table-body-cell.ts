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
	 * Returns a row data if exists.
	 * Returns undefined if a row data does not exit.
	 *
	 * @returns a row data or undefined.
	 */
	readonly row?: ROW;

	/**
	 * Returns a row index if a row data exists.
	 * Returns -1 if a row data does not exit.
	 *
	 * @returns a row index or -1.
	 */
	readonly rowIndex: number;

	set(
		value: unknown, row: ROW, supplimental: unknown,
		rowIndex: number, columnIndex: number,
		forcibly?: boolean
	): void;
	unset(): void;
}
