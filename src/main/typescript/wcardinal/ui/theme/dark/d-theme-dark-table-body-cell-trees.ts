/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DTableState } from "../../d-table-state";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";

export class DThemeDarkTableBodyCellTrees {
	static init(): void {
		DThemeDarkExpandables.init();
	}

	static getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		if (state.is(DTableState.HAS_CHILDREN)) {
			if (state.is(DTableState.OPENED)) {
				return DThemeDarkExpandables.getImageOpened();
			} else {
				return DThemeDarkExpandables.getImageClosed();
			}
		}
		return null;
	}
}
