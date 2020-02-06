/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import {
	DTableBodyCellSelectMenu, DTableBodyCellSelectMenuOptions, DThemeTableBodyCellSelectMenu
} from "./d-table-body-cell-select-menu";

export interface DTableBodyCellActionMenuOptions<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu
> extends DTableBodyCellSelectMenuOptions<ROW, unknown, THEME> {

}

export interface DThemeTableBodyCellActionMenu extends DThemeTableBodyCellSelectMenu {

}

export class DTableBodyCellActionMenu<
	ROW = unknown,
	THEME extends DThemeTableBodyCellActionMenu = DThemeTableBodyCellActionMenu,
	OPTIONS extends DTableBodyCellActionMenuOptions<ROW, THEME> = DTableBodyCellActionMenuOptions<ROW, THEME>
> extends DTableBodyCellSelectMenu<ROW, unknown, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellActionMenu";
	}
}
