/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableColumn } from "./d-table-column";

export interface DTableBodyCellOptions<ROW> {
	column: {
		index: number,
		data: DTableColumn<ROW>
	};
}

export interface DTableBodyCell {
	set( value: unknown, rowIndex: number, columnIndex: number, forcibly?: boolean ): void;
	unset(): void;
}
