/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTableBodyCellTree } from "../../d-table-body-cell-tree";
import { DThemeDarkTableBodyCellButton } from "./d-theme-dark-table-body-cell-button";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";

DThemeDarkTableBodyCellTrees.init();

export class DThemeDarkTableBodyCellTree
	extends DThemeDarkTableBodyCellButton
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
		return DThemeDarkTableBodyCellTrees.getImageSource(state);
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return this.getColor(state);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return this.getAlpha(state) * 0.5;
	}
}
