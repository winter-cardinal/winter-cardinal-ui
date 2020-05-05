/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DTableCellState } from "../../d-table-cell-state";
import { DThemeWhiteExpandables } from "./d-theme-white-expandables";
import { DThemeWhiteFont } from "./d-theme-white-font";

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

	static 	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteFont.getColor( state );
	}

	static getImageTintAlpha( state: DBaseState ): number {
		return 0.5;
	}
}
