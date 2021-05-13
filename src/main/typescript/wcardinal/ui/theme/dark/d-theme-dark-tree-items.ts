/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkTreeItems {
	protected static readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.brighten(
		DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR,
		0.1
	);
	protected static readonly BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	protected static readonly BACKGROUND_COLOR_ODD = UtilRgb.brighten(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		0.02
	);
	protected static readonly WEAK_STRONG_HIGHLIGHT_COLOR = UtilRgb.brighten(
		DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD,
		0.05
	);

	static getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isInvalid) {
			return DThemeDarkConstants.INVALID_BLENDED_ON_BOARD;
		} else if (state.isActive) {
			return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if (state.isFocused && state.isHovered) {
			return this.WEAK_STRONG_HIGHLIGHT_COLOR;
		} else if (state.isFocused || state.isHovered) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			return null;
		}
	}

	static getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	static getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	static getBorderAlign(state: DBaseStateSet): number {
		return 0;
	}

	static getBorderMask(state: DBaseStateSet): DBorderMask {
		return DBorderMask.NONE;
	}

	static getColor(state: DBaseStateSet): number {
		return DThemeDarkConstants.COLOR;
	}

	static getAlpha(state: DBaseStateSet): number {
		if (state.inEnabled) {
			return 1.0;
		}
		return 0;
	}

	static getImageTintColor(state: DBaseStateSet, isActive?: boolean): number | null {
		if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
			if (state.isFocused) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			}
			return 0x646464;
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
	}

	static getOutlineAlign(state: DBaseStateSet): number {
		return -2;
	}

	static getWidth(): DCoordinateSize {
		return "padding";
	}

	static getHeight(): number {
		return 30;
	}

	static getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
