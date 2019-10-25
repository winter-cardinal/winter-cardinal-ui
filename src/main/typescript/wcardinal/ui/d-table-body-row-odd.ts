/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableBodyRow, DTableBodyRowOptions, DThemeTableBodyRow } from "./d-table-body-row";

export interface DTableBodyRowOddOptions<ROW, THEME extends DThemeTableBodyRowOdd = DThemeTableBodyRowOdd>
	extends DTableBodyRowOptions<ROW, THEME> {

}

export interface DThemeTableBodyRowOdd extends DThemeTableBodyRow {

}

export class DTableBodyRowOdd<
	ROW,
	THEME extends DThemeTableBodyRowOdd = DThemeTableBodyRowOdd,
	OPTIONS extends DTableBodyRowOddOptions<ROW, THEME> = DTableBodyRowOddOptions<ROW, THEME>
> extends DTableBodyRow<ROW, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyRowOdd";
	}
}
