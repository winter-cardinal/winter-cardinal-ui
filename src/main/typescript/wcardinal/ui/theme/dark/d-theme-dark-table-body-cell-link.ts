/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

DThemeDarkLinks.init();

export class DThemeDarkTableBodyCellLink
	extends DThemeDarkTableBodyCellButton
	implements DThemeTableBodyCellLink {
	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCells.getImageTintColor(state, true);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkLinks.getImageSource(state);
	}

	getLinkMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeDarkLinks.getLinkMenuOptions();
	}
}
