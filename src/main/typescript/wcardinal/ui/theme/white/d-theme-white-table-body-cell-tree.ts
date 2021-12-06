/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellTree } from "../../d-table-body-cell-tree";
import { DThemeWhiteTableBodyCellButton } from "./d-theme-white-table-body-cell-button";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";

DThemeWhiteTableBodyCellTrees.init();

export class DThemeWhiteTableBodyCellTree
	extends DThemeWhiteTableBodyCellButton
	implements DThemeTableBodyCellTree
{
	getLevelPadding(level: number): number {
		return 24 + level * 20 - this.getPaddingLeft();
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getImageMarginHorizontal(): number {
		return -19;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource(state);
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state) * 0.5;
	}
}
