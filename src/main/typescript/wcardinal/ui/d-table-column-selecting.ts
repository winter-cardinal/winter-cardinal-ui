/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDialogOpener } from "./d-dialog";
import { DDialogSelectOptions } from "./d-dialog-select";
import { DMenu, DMenuOptions } from "./d-menu";

export type DTableColumnSelectingGetter<CELL_VALUE, DIALOG> = (
	dialog: DIALOG,
	cell: CELL_VALUE
) => CELL_VALUE;
export type DTableColumnSelectingSetter<CELL_VALUE, DIALOG> = (
	dialog: DIALOG,
	cell: CELL_VALUE
) => void;

export interface DTableColumnSelectingDialog<DIALOG_VALUE> {
	readonly value: DIALOG_VALUE;
	open(owner?: DDialogOpener): Promise<DIALOG_VALUE>;
}

export interface DTableColumnSelectingOptions<
	CELL_VALUE,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter?: DTableColumnSelectingGetter<CELL_VALUE, DIALOG>;
	setter?: DTableColumnSelectingSetter<CELL_VALUE, DIALOG>;

	menu?: DMenuOptions<CELL_VALUE> | DMenu<CELL_VALUE>;
	multiple?: DMenuOptions<CELL_VALUE> | DMenu<CELL_VALUE>;
	dialog?: DDialogSelectOptions<DIALOG_VALUE> | DIALOG;
	promise?: () => Promise<CELL_VALUE>;
}

export interface DTableColumnSelecting<
	CELL_VALUE,
	DIALOG_VALUE,
	DIALOG extends DTableColumnSelectingDialog<DIALOG_VALUE>
> {
	getter: DTableColumnSelectingGetter<CELL_VALUE, DIALOG>;
	setter: DTableColumnSelectingSetter<CELL_VALUE, DIALOG>;

	menu?: DMenu<CELL_VALUE>;
	multiple?: DMenu<CELL_VALUE>;
	dialog?: DIALOG;
	promise?: () => Promise<CELL_VALUE>;
}
