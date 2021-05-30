/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDarkListItems } from "./d-theme-dark-list-items";
import { DThemeDarkTableBodyCellTrees } from "./d-theme-dark-table-body-cell-trees";

export class DThemeDarkTreeItems extends DThemeDarkListItems {
	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkTableBodyCellTrees.getImageSource(state);
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
