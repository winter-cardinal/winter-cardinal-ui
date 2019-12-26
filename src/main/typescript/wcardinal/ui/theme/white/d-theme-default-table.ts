/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeWhiteConstants } from "./d-theme-default-constants";
import { DThemeWhiteLayoutVertical } from "./d-theme-default-layout-vertical";

export class DThemeWhiteTable extends DThemeWhiteLayoutVertical implements DThemeTable {
	getBackgroundColor() {
		return DThemeWhiteConstants.BACKGROUND_COLOR;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0xdddddd;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
