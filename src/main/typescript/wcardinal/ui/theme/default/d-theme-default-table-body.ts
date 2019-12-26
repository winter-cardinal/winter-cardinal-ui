/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { DThemeTableBody } from "../../d-table-body";
import { DThemeDefaultPane } from "./d-theme-default-pane";

export class DThemeDefaultTableBody extends DThemeDefaultPane implements DThemeTableBody {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.TOP;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getRowHeight(): number {
		return 30;
	}
}
