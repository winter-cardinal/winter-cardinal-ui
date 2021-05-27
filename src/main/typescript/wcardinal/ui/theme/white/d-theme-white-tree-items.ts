/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeWhiteListItems } from "./d-theme-white-list-items";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";

DThemeWhiteTableBodyCellTrees.init();

export class DThemeWhiteTreeItems extends DThemeWhiteListItems {
	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource(state);
	}

	getSecondaryImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getSecondaryImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state) * 0.5;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return -19;
	}
}
