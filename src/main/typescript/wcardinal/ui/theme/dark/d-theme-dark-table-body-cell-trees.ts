/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkExpandables } from "./d-theme-dark-expandables";
import { DThemeDarkTableBodyCells } from "./d-theme-dark-table-body-cells";

export class DThemeDarkTableBodyCellTrees {
	static init(): void {
		DThemeDarkExpandables.init();
	}

	static getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.is( DTableCellState.HAS_CHILDREN ) ) {
			if( state.is( DTableCellState.OPENED ) ) {
				return DThemeDarkExpandables.getImageOpened();
			} else {
				return DThemeDarkExpandables.getImageClosed();
			}
		}
		return null;
	}

	static getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkConstants.COLOR;
	}

	static getImageTintAlpha( state: DBaseStateSet ): number {
		return DThemeDarkTableBodyCells.getAlpha( state ) * 0.5;
	}
}
