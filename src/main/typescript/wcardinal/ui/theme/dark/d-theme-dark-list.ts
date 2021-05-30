/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeList } from "../../d-list";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkList extends DThemeDarkPane implements DThemeList {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
	}
}
