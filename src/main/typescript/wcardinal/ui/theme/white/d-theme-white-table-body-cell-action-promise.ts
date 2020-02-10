/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectPromise } from "./d-theme-white-table-body-cell-select-promise";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionPromise extends DThemeWhiteTableBodyCellSelectPromise
	implements DThemeTableBodyCellActionPromise {

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
