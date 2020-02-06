/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DTableBodyCellLink, DTableBodyCellLinkOptions, DThemeTableBodyCellLink } from "./d-table-body-cell-link";

export interface DTableBodyCellLinkEditOptions<
	ROW,
	THEME extends DThemeTableBodyCellLinkEdit = DThemeTableBodyCellLinkEdit
> extends DTableBodyCellLinkOptions<ROW, THEME> {

}

export interface DThemeTableBodyCellLinkEdit extends DThemeTableBodyCellLink {

}

export class DTableBodyCellLinkEdit<
	ROW,
	THEME extends DThemeTableBodyCellLinkEdit = DThemeTableBodyCellLinkEdit,
	OPTIONS extends DTableBodyCellLinkEditOptions<ROW, THEME> = DTableBodyCellLinkEditOptions<ROW, THEME>
> extends DTableBodyCellLink<ROW, THEME, OPTIONS> {
	protected getType(): string {
		return "DTableBodyCellLinkEdit";
	}
}
