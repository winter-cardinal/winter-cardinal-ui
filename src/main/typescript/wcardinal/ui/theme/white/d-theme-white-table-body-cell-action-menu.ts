/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectMenu } from "./d-theme-white-table-body-cell-select-menu";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionMenu extends DThemeWhiteTableBodyCellSelectMenu
	implements DThemeTableBodyCellActionMenu {

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteTableBodyCellActions.getImageTintColor( state );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellActions.getImageSource( state );
	}

	isSyncEnabled(): boolean {
		return false;
	}
}
