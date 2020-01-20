/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeDarkPane } from "./d-theme-dark-pane";

export class DThemeDarkTable extends DThemeDarkPane implements DThemeTable {
	getBackgroundColor() {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return 0x646464;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
