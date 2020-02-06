/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeDarkTableBodyCellSelectMenu } from "./d-theme-dark-table-body-cell-select-menu";

export class DThemeDarkTableBodyCellActionMenu extends DThemeDarkTableBodyCellSelectMenu
	implements DThemeTableBodyCellActionMenu {

	isSyncEnabled(): boolean {
		return false;
	}
}
