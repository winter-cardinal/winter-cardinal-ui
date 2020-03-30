/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteList extends DThemeWhitePane {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderAlign( state: DBaseState ): number {
		return 1;
	}
}
