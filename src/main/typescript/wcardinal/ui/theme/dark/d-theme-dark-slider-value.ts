/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderValue } from "../../d-slider-value";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkTextBase } from "./d-theme-dark-text-base";

export class DThemeDarkSliderValue<VALUE = unknown>
	extends DThemeDarkTextBase<VALUE>
	implements DThemeSliderValue<VALUE>
{
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return this.getLineHeight() * 2;
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return 0x646464;
		}
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getColor(state: DBaseStateSet): number {
		return DThemeDarkConstants.ACTIVE_COLOR;
	}

	getAlpha(state: DBaseStateSet): number {
		if (state.inDisabled) {
			return 0.38;
		}
		return 1;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getTextAlignVertical(): DAlignVertical {
		return DAlignVertical.TOP;
	}

	getPrecision(): number {
		return 0;
	}

	newState(state: DBaseStateSet): void {
		super.newState(state);
		state.isFocusable = false;
	}
}
