/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignVertical } from "../../d-align-vertical";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderValue } from "../../d-slider-value";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteTextBase } from "./d-theme-white-text-base";

export class DThemeWhiteSliderValue<VALUE = unknown>
	extends DThemeWhiteTextBase<VALUE>
	implements DThemeSliderValue<VALUE>
{
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return "AUTO";
	}

	getHeight(): DCoordinateSize {
		return this.getLineHeight();
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return 0xaaaaaa;
		}
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getColor(state: DBaseStateSet): number {
		return DThemeWhiteConstants.ACTIVE_COLOR;
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
