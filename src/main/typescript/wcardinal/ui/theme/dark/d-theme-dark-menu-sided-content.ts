/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuSidedContent } from "../../d-menu-sided-content";
import { DThemeDarkLayoutVertical } from "./d-theme-dark-layout-vertical";

export class DThemeDarkMenuSidedContent extends DThemeDarkLayoutVertical implements DThemeMenuSidedContent {
	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
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
