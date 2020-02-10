/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionMenu } from "../../d-table-body-cell-action-menu";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCellSelectMenu } from "./d-theme-dark-table-body-cell-select-menu";

DThemeDarkTableBodyCellActions.init();

export class DThemeDarkTableBodyCellActionMenu extends DThemeDarkTableBodyCellSelectMenu
	implements DThemeTableBodyCellActionMenu {

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeDarkTableBodyCellActions.getImageTintColor( state );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellActions.getImageSource( state );
	}

	isSyncEnabled(): boolean {
		return false;
	}
}
