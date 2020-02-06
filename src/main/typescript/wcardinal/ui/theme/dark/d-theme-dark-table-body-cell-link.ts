/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";

export class DThemeDarkTableBodyCellLink extends DThemeDarkTableBodyCellButton
	implements DThemeTableBodyCellLink {

	getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeDarkLinks.getMenuOptions();
	}
}
