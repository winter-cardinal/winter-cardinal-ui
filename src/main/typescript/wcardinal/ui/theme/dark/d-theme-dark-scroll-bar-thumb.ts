/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeScrollBarThumb } from "../../d-scroll-bar-thumb";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkBase } from "./d-theme-dark-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkScrollBarThumb extends DThemeDarkBase implements DThemeScrollBarThumb {
	BORDER_COLOR = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.25);
	BORDER_COLOR_DISABLED = UtilRgb.darken(this.BORDER_COLOR, 0.75);
	BORDER_COLOR_HOVERED = UtilRgb.darken(this.BORDER_COLOR, 0.25);
	BORDER_COLOR_OTHER = UtilRgb.darken(this.BORDER_COLOR, 0.5);

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return this.BORDER_COLOR_DISABLED;
		} else if (state.isHovered || state.isGesturing) {
			return this.BORDER_COLOR_HOVERED;
		} else {
			return this.BORDER_COLOR_OTHER;
		}
	}

	getBorderAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderWidth(state: DBaseStateSet): number {
		return 3;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 1;
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

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
