/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCornerMask } from "../../d-corner";
import { DThemeTableRow } from "../../d-table-row";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteTableRow extends DThemeWhiteLayoutHorizontal implements DThemeTableRow {
	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getMargin(): number {
		return 0;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getReverse(): boolean {
		return true;
	}
}
