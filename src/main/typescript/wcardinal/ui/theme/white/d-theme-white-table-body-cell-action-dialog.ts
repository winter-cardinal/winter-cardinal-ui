/*
 * Copyright (C) 2020 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellActionDialog } from "../../d-table-body-cell-action-dialog";
import { DThemeWhiteTableBodyCellActions } from "./d-theme-white-table-body-cell-actions";
import { DThemeWhiteTableBodyCellSelectDialog } from "./d-theme-white-table-body-cell-select-dialog";

DThemeWhiteTableBodyCellActions.init();

export class DThemeWhiteTableBodyCellActionDialog<VALUE = unknown>
	extends DThemeWhiteTableBodyCellSelectDialog<VALUE>
	implements DThemeTableBodyCellActionDialog<VALUE> {
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
