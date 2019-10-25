/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableBodyRow, DTableBodyRowOptions, DThemeTableBodyRow } from "./d-table-body-row";

export interface DTableBodyRowEvenOptions<ROW, THEME extends DThemeTableBodyRowEven = DThemeTableBodyRowEven>
	extends DTableBodyRowOptions<ROW, THEME> {

}

export interface DThemeTableBodyRowEven extends DThemeTableBodyRow {

}

export class DTableBodyRowEven<
	ROW,
	THEME extends DThemeTableBodyRowEven = DThemeTableBodyRowEven,
	OPTIONS extends DTableBodyRowEvenOptions<ROW, THEME> = DTableBodyRowEvenOptions<ROW, THEME>
> extends DTableBodyRow<ROW, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyRowEven";
	}
}
