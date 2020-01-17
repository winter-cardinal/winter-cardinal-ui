/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkImage } from "./d-theme-dark-image";

export class DThemeDarkListItemSeparator extends DThemeDarkImage implements DThemeListItemSeparator {
	COLOR = 0x383838;

	getBorderColor( state: DBaseState ): number | null {
		return this.COLOR;
	}

	getBorderAlpha( state: DBaseState ): number {
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
}
