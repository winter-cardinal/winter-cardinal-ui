/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellActionPromise } from "../../d-table-body-cell-action-promise";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectPromise } from "./d-theme-white-table-body-cell-select-promise";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionPromise<VALUE = unknown>
	extends DThemeWhiteTableBodyCellSelectPromise<VALUE>
	implements DThemeTableBodyCellActionPromise<VALUE> {
	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCellActions.getImageTintColor(state);
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellActions.getImageSource(state);
	}

	isSyncEnabled(): boolean {
		return false;
	}
}
