/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTableBody } from "../../d-table-body";
import { DThemeDarkBase } from "./d-theme-dark-base";

export class DThemeDarkTableBody extends DThemeDarkBase implements DThemeTableBody {
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

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}
}
