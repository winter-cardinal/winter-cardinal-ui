/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTreeItemCheck } from "../../d-tree-item-check";
import { DThemeWhiteButtonCheck } from "./d-theme-white-button-check";

export class DThemeWhiteTreeItemCheck extends DThemeWhiteButtonCheck implements DThemeTreeItemCheck {
	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return 21;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
