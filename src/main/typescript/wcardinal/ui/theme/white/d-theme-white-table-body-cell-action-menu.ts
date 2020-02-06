/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeWhiteTableBodyCellSelectMenu } from "./d-theme-white-table-body-cell-select-menu";

export class DThemeWhiteTableBodyCellActionMenu extends DThemeWhiteTableBodyCellSelectMenu
	implements DThemeTableBodyCellActionMenu {

	isSyncEnabled(): boolean {
		return false;
	}
}
