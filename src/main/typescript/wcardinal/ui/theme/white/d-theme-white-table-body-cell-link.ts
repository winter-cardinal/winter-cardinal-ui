/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemeWhiteLinks } from "./d-theme-white-links";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";

export class DThemeWhiteTableBodyCellLink extends DThemeWhiteTableBodyCellButton
	implements DThemeTableBodyCellLink {

	getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeWhiteLinks.getMenuOptions();
	}
}
