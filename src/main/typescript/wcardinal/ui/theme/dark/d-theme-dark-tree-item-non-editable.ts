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
	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return this._style.getSecondaryImageSource(state);
	}

	getSecondaryImageTintColor(state: DBaseStateSet): number | null {
		return this._style.getSecondaryImageTintColor(state);
	}

	getSecondaryImageTintAlpha(state: DBaseStateSet): number {
		return this._style.getSecondaryImageTintAlpha(state);
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return this._style.getSecondaryImageAlignWith();
	}

	getSecondaryImageMarginHorizontal(): number {
		return this._style.getSecondaryImageMarginHorizontal();
	}
}
