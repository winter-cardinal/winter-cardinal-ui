/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTree } from "../../d-tree";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";
import { DThemeWhiteTreeItems } from "./d-theme-white-tree-items";

export class DThemeWhiteTree extends DThemeWhitePane implements DThemeTree {
	protected _style: DThemeWhiteTreeItems;

	constructor() {
		super();
		this._style = this.newStyle();
	}

	protected newStyle(): DThemeWhiteTreeItems {
		return new DThemeWhiteTreeItems(null, true, false);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}
}
