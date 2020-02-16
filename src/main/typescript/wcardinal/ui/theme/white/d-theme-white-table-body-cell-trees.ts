/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";

export class DThemeWhiteTableBodyCellTrees {
	static init(): void {
		DThemeWhiteExpandables.init();
	}

	static getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DTableCellState.HAS_CHILDREN ) {
			if( state & DTableCellState.OPENED ) {
				return DThemeWhiteExpandables.getImageOpened();
			} else {
				return DThemeWhiteExpandables.getImageClosed();
			}
		}
		return null;
	}
}
