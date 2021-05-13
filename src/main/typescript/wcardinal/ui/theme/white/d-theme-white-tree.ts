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
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}

	getItemHeight(): number {
		return DThemeWhiteTreeItems.getHeight();
	}
}
