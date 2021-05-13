/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteTreeItems {
	protected static readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken(
		DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR,
		0.1
	);
	protected static readonly BACKGROUND_COLOR_EVEN =
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	protected static readonly BACKGROUND_COLOR_ODD = UtilRgb.darken(
		DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD,
		0.01
	);
	protected static readonly WEAK_STRONG_HIGHLIGHT_COLOR = UtilRgb.darken(
		DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD,
		0.025
	);

	static getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isInvalid) {
			return DThemeWhiteConstants.INVALID_BLENDED_ON_BOARD;
		} else if (state.isActive) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if (state.isFocused && state.isHovered) {
			return this.WEAK_STRONG_HIGHLIGHT_COLOR;
		} else if (state.isFocused || state.isHovered) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
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
		return DThemeWhiteConstants.COLOR;
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
			} else {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
			}
		} else {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
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
