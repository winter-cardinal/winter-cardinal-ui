/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
import { DThemeWhiteTableBodyCells } from "./d-theme-white-table-body-cells";

export class DThemeWhiteTableBodyCellTrees {
	static init(): void {
		DThemeWhiteExpandables.init();
	}

	static getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.is( DTableCellState.HAS_CHILDREN ) ) {
			if( state.is( DTableCellState.OPENED ) ) {
				return DThemeWhiteExpandables.getImageOpened();
			} else {
				return DThemeWhiteExpandables.getImageClosed();
			}
		}
		return null;
	}

	static 	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteConstants.COLOR;
	}

	static getImageTintAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteTableBodyCells.getAlpha( state ) * 0.5;
	}
}
