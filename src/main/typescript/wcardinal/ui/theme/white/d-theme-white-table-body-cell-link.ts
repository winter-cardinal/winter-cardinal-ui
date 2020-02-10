/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeTableBodyCellLink } from "../../d-table-body-cell-link";
import { DThemeWhiteLinks } from "./d-theme-white-links";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

DThemeWhiteLinks.init();

export class DThemeWhiteTableBodyCellLink extends DThemeWhiteTableBodyCellButton
	implements DThemeTableBodyCellLink {

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCells.getImageTintColor( state | DBaseState.ACTIVE );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteLinks.getImageSource( state );
	}

	getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeWhiteLinks.getMenuOptions();
	}
}
