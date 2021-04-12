/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemExpandableBody } from "../../d-menu-item-expandable-body";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";

export class DThemeWhiteMenuItemExpandableBody
	extends DThemeWhiteLayoutVertical
	implements DThemeMenuItemExpandableBody {
	getWidth(): DCoordinateSize {
		return "padding";
	}

	getHeight(): DCoordinateSize {
		return "auto";
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
