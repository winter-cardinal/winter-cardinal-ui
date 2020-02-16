/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";

export class DThemeDarkTableBodyCellTrees {
	static init(): void {
		DThemeDarkExpandables.init();
	}

	static getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DTableCellState.HAS_CHILDREN ) {
			if( state & DTableCellState.OPENED ) {
				return DThemeDarkExpandables.getImageOpened();
			} else {
				return DThemeDarkExpandables.getImageClosed();
			}
		}
		return null;
	}
}
