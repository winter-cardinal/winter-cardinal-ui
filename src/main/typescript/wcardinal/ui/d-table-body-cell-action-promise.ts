/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableBodyCellSelectPromise, DTableBodyCellSelectPromiseOptions, DThemeTableBodyCellSelectPromise
} from "./d-table-body-cell-select-promise";

export interface DTableBodyCellActionPromiseOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellActionPromise<VALUE> = DThemeTableBodyCellActionPromise<VALUE>
> extends DTableBodyCellSelectPromiseOptions<ROW, VALUE, THEME> {

}

export interface DThemeTableBodyCellActionPromise<VALUE = unknown> extends DThemeTableBodyCellSelectPromise<VALUE> {

}

export class DTableBodyCellActionPromise<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellActionPromise<VALUE> = DThemeTableBodyCellActionPromise<VALUE>,
	OPTIONS extends DTableBodyCellActionPromiseOptions<ROW, VALUE, THEME> = DTableBodyCellActionPromiseOptions<ROW, VALUE, THEME>
> extends DTableBodyCellSelectPromise<ROW, VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellActionPromise";
	}
}
