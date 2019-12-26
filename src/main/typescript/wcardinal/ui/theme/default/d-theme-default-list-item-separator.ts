/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeListItemSeparator } from "../../d-list-item-separator";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultImage } from "./d-theme-default-image";

export class DThemeDefaultListItemSeparator extends DThemeDefaultImage implements DThemeListItemSeparator {
	getBorderColor( state: DBaseState ): number | null {
		return DThemeDefaultConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getBorderAlpha( state: DBaseState ): number {
		return DThemeDefaultConstants.WEAK_HIGHLIGHT_ALPHA;
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
