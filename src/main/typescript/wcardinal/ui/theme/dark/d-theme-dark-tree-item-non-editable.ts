/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTreeItemNonEditable } from "../../d-tree-item-non-editable";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";
import { DThemeDarkTreeItemButton } from "./d-theme-dark-tree-item-button";

DThemeDarkTableBodyCellTrees.init();

export class DThemeDarkTreeItemNonEditable
	extends DThemeDarkTreeItemButton
	implements DThemeTreeItemNonEditable {
	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return -19;
	}

	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellTrees.getImageSource(state);
	}

	getSecondaryImageTintColor(state: DBaseStateSet): number | null {
		return DThemeDarkTableBodyCellTrees.getImageTintColor(state);
	}

	getSecondaryImageTintAlpha(state: DBaseStateSet): number {
		return DThemeDarkTableBodyCellTrees.getImageTintAlpha(state);
	}
}
