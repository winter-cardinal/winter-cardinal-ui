/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";

export class DThemeDarkListItemSeparator extends DThemeDarkImage<string> implements DThemeListItemSeparator {
	getBorderColor( state: DBaseStateSet ): number | null {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getBorderAlpha( state: DBaseStateSet ): number {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
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
