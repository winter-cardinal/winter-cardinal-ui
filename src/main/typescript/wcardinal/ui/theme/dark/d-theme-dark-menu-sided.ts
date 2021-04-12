/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuSided } from "../../d-menu-sided";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkMenuSided extends DThemeDarkPane implements DThemeMenuSided {
	getBackgroundColor(state: DBaseStateSet): number | null {
		return DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
