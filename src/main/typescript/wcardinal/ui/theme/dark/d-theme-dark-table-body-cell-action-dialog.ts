/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCellSelectDialog } from "./d-theme-dark-table-body-cell-select-dialog";

DThemeDarkTableBodyCellActions.init();

export class DThemeDarkTableBodyCellActionDialog extends DThemeDarkTableBodyCellSelectDialog
	implements DThemeTableBodyCellActionDialog {

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkTableBodyCellActions.getImageTintColor( state );
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellActions.getImageSource( state );
	}

	isSyncEnabled(): boolean {
		return false;
	}
}
