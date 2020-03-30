/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeTree } from "../../d-tree";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteTree extends DThemeWhitePane implements DThemeTree {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
