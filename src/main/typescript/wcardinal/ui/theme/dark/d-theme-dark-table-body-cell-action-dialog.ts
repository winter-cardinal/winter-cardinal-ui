/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeDarkTableBodyCellSelectDialog } from "./d-theme-dark-table-body-cell-select-dialog";

export class DThemeDarkTableBodyCellActionDialog extends DThemeDarkTableBodyCellSelectDialog
	implements DThemeTableBodyCellActionDialog {

	isSyncEnabled(): boolean {
		return false;
	}
}
