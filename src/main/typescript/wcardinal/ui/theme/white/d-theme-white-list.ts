/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeList } from "../../d-list";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteList extends DThemeWhitePane implements DThemeList {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}
}
