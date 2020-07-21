/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTable } from "../../d-table";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkTable extends DThemeDarkPane implements DThemeTable {
	getBackgroundColor() {
		return DThemeDarkConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
