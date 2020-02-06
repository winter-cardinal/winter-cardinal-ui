/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeWhiteTableBodyCellSelectDialog } from "./d-theme-white-table-body-cell-select-dialog";

export class DThemeWhiteTableBodyCellActionDialog extends DThemeWhiteTableBodyCellSelectDialog
	implements DThemeTableBodyCellActionDialog {

	isSyncEnabled(): boolean {
		return false;
	}
}
