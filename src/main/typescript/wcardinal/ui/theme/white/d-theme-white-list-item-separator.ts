/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteListItemSeparator extends DThemeWhiteImage<string> implements DThemeListItemSeparator {
	getBorderColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getBorderAlpha( state: DBaseStateSet ): number {
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
