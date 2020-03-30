/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteMenuSided extends DThemeWhitePane implements DThemeMenuSided {
	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
