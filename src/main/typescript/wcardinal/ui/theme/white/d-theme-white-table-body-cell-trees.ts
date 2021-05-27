/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DTableState } from "../../d-table-state";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";

export class DThemeWhiteTableBodyCellTrees {
	static init(): void {
		DThemeWhiteExpandables.init();
	}

	static getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.is(DTableState.HAS_CHILDREN)) {
			if (state.is(DTableState.OPENED)) {
				return DThemeWhiteExpandables.getImageOpened();
			} else {
				return DThemeWhiteExpandables.getImageClosed();
			}
		}
		return null;
	}
}
