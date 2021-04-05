/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeTable } from "../../d-table";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhitePane } from "./d-theme-white-pane";

export class DThemeWhiteTable extends DThemeWhitePane implements DThemeTable {
	getBackgroundColor(): number {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
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
