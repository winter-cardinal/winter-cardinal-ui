/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableBodyCellSelectDialog, DTableBodyCellSelectDialogOptions, DThemeTableBodyCellSelectDialog
} from "./d-table-body-cell-select-dialog";

export interface DTableBodyCellActionDialogOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionDialog = DThemeTableBodyCellActionDialog
> extends DTableBodyCellSelectDialogOptions<ROW, unknown, THEME> {

}

export interface DThemeTableBodyCellActionDialog extends DThemeTableBodyCellSelectDialog {

}

export class DTableBodyCellActionDialog<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionDialog = DThemeTableBodyCellActionDialog,
	OPTIONS extends DTableBodyCellActionDialogOptions<ROW, THEME> = DTableBodyCellActionDialogOptions<ROW, THEME>
> extends DTableBodyCellSelectDialog<ROW, unknown, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellActionDialog";
	}
}
