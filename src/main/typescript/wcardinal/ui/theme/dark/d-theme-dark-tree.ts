/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTree } from "../../d-tree";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";
import { DThemeDarkTreeItems } from "./d-theme-dark-tree-items";

export class DThemeDarkTree extends DThemeDarkPane implements DThemeTree {
	protected _style: DThemeDarkTreeItems;

	constructor() {
		super();
		this._style = this.newStyle();
	}

	protected newStyle(): DThemeDarkTreeItems {
		return new DThemeDarkTreeItems(null, true, false);
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}
}
