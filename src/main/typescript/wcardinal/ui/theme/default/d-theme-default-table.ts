/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DThemeTable } from "../../d-table";
import { DThemeDefaultLayoutVertical } from "./d-theme-default-layout-vertical";

export class DThemeDefaultTable extends DThemeDefaultLayoutVertical implements DThemeTable {
	getBackgroundColor() {
		return this.dThemeConfiguration.getTableBackgroundColor();
	}

	getBorderColor( state: DBaseState ): number | null {
		return this.dThemeConfiguration.getTableBorderColor();
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
