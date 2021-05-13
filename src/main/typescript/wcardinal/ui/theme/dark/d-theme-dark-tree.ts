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
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}

	getItemHeight(): number {
		return DThemeDarkTreeItems.getHeight();
	}
}
