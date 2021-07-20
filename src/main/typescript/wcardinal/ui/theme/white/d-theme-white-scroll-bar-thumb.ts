/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteBase } from "./d-theme-white-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteScrollBarThumb extends DThemeWhiteBase implements DThemeScrollBarThumb {
	BORDER_COLOR = UtilRgb.darken(DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.25);

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return this.BORDER_COLOR;
	}

	getBorderAlpha(state: DBaseStateSet): number {
		if (state.inDisabled) {
			return 0.25;
		} else if (state.isHovered || state.isGesturing) {
			return 0.75;
		} else {
			return 0.5;
		}
	}

	getBorderWidth(state: DBaseStateSet): number {
		return 3;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 0.5;
	}

	getWidth(): DCoordinateSize {
		return 13;
	}

	getHeight(): DCoordinateSize {
		return 13;
	}

	getThumbMinimumLength(): number {
		return 16;
	}
}
