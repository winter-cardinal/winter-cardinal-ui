/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultLayoutVertical } from "./d-theme-default-layout-vertical";

export class DThemeDefaultTable extends DThemeDefaultLayoutVertical implements DThemeTable {
	getBackgroundColor() {
		return DThemeDefaultConstants.BACKGROUND_COLOR;
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
