/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTreeItemNonEditable } from "../../d-tree-item-non-editable";
import { DThemeWhiteTableBodyCellTrees } from "./d-theme-white-table-body-cell-trees";
import { DThemeWhiteTreeItemButton } from "./d-theme-white-tree-item-button";

DThemeWhiteTableBodyCellTrees.init();

export class DThemeWhiteTreeItemNonEditable
	extends DThemeWhiteTreeItemButton
	implements DThemeTreeItemNonEditable {
	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return -19;
	}

	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteTableBodyCellTrees.getImageSource(state);
	}

	getSecondaryImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteTableBodyCellTrees.getImageTintColor(state);
	}

	getSecondaryImageTintAlpha(state: DBaseStateSet): number {
		return DThemeWhiteTableBodyCellTrees.getImageTintAlpha(state);
	}
}
