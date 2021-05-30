/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeMenuItemSeparator } from "../../d-menu-item-separator";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteMenuItemBase } from "./d-theme-white-menu-item-base";

export class DThemeWhiteMenuItemSeparator
	extends DThemeWhiteMenuItemBase
	implements DThemeMenuItemSeparator {
	getBorderColor(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getBorderAlpha(state: DBaseStateSet): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	getHeight(): DCoordinateSize {
		return 15;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.NONE;
	}
}
