/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeDarkTableBodyCellActions } from "./d-theme-dark-table-body-cell-actions";
import { DThemeDarkTableBodyCellSelectPromise } from "./d-theme-dark-table-body-cell-select-promise";

DThemeDarkTableBodyCellActions.init();

export class DThemeDarkTableBodyCellActionPromise extends DThemeDarkTableBodyCellSelectPromise
	implements DThemeTableBodyCellActionPromise {

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
