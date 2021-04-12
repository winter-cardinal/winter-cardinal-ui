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
	COLOR = UtilRgb.brighten(DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.5);

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return this.COLOR;
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
	}

	getBorderAlpha(state: DBaseStateSet): number {
		if (!state.inDisabled && (state.isHovered || state.isDragging)) {
			return 1.0;
		} else {
			return 0.4;
		}
	}

	getBorderWidth(state: DBaseStateSet): number {
		return 2;
	}

	getBorderAlign(state: DBaseStateSet): number {
		return 0;
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
