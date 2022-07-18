/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

export type DTableColumnEditingFormatter<CELL_VALUE> = (cell: CELL_VALUE) => string;
export type DTableColumnEditingUnformatter<CELL_VALUE> = (formatted: string) => CELL_VALUE;
export type DTableColumnEditingValidator<CELL_VALUE> = (cell: CELL_VALUE) => string | null;
export type DTableColumnEditable<ROW_VALUE> = (row: ROW_VALUE, columnIndex: number) => boolean;

export interface DTableColumnEditingOptions<ROW_VALUE, CELL_VALUE> {
	enable?: boolean | DTableColumnEditable<ROW_VALUE> | "auto" | "AUTO";
	formatter?: DTableColumnEditingFormatter<CELL_VALUE>;
	unformatter?: DTableColumnEditingUnformatter<CELL_VALUE>;
	validator?: DTableColumnEditingValidator<CELL_VALUE>;
}

export interface DTableColumnEditing<ROW_VALUE, CELL_VALUE> {
	enable: boolean | DTableColumnEditable<ROW_VALUE>;
	formatter?: DTableColumnEditingFormatter<CELL_VALUE>;
	unformatter?: DTableColumnEditingUnformatter<CELL_VALUE>;
	validator?: DTableColumnEditingValidator<CELL_VALUE>;
}
