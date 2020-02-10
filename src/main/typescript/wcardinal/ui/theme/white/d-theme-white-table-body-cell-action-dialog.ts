/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectDialog } from "./d-theme-white-table-body-cell-select-dialog";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionDialog extends DThemeWhiteTableBodyCellSelectDialog
	implements DThemeTableBodyCellActionDialog {

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
