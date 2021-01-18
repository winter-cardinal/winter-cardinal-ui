/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableBodyCellSelectDialog, DTableBodyCellSelectDialogOptions, DThemeTableBodyCellSelectDialog
} from "./d-table-body-cell-select-dialog";

export interface DTableBodyCellActionDialogOptions<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellActionDialog<VALUE> = DThemeTableBodyCellActionDialog<VALUE>
> extends DTableBodyCellSelectDialogOptions<ROW, VALUE, THEME> {

}

export interface DThemeTableBodyCellActionDialog<VALUE = unknown> extends DThemeTableBodyCellSelectDialog<VALUE> {

}

export class DTableBodyCellActionDialog<
	ROW = unknown,
	VALUE = unknown,
	THEME extends DThemeTableBodyCellActionDialog<VALUE> = DThemeTableBodyCellActionDialog<VALUE>,
	OPTIONS extends DTableBodyCellActionDialogOptions<ROW, VALUE, THEME> = DTableBodyCellActionDialogOptions<ROW, VALUE, THEME>
> extends DTableBodyCellSelectDialog<ROW, VALUE, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellActionDialog";
	}
}
