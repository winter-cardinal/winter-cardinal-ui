/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinate } from "../../d-coordinate";
import { DThemeMenuSidedContent } from "../../d-menu-sided-content";
import { DThemeWhiteLayoutVertical } from "./d-theme-white-layout-vertical";

export class DThemeWhiteMenuSidedContent extends DThemeWhiteLayoutVertical implements DThemeMenuSidedContent {
	getWidth(): DCoordinate {
		return "100%";
	}

	getHeight(): DCoordinate {
		return "auto";
	}

	getPaddingTop(): number {
		return 16;
	}

	getPaddingBottom(): number {
		return 16;
	}

	getMargin(): number {
		return 0;
	}
}
