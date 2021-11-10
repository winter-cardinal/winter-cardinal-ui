/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DBorderMask } from "../../d-border-mask";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DTableState } from "../../d-table-state";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkTableBodyCells {
	protected static readonly BACKGROUND_COLOR_EVEN = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;
	protected static readonly BACKGROUND_COLOR_ODD = UtilRgb.brighten(
		DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD,
		0.02
	);
	protected static readonly BORDER_COLOR = DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD;

	static getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			if (state.is(DTableState.FROZEN)) {
				return state.onAlternated ? this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
			} else {
				return null;
			}
		} else if (state.isInvalid) {
			return DThemeDarkConstants.INVALID_BLENDED_ON_BOARD;
		} else if (state.underActive) {
			return DThemeDarkConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if (state.onHovered || state.isHovered) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			if (state.is(DTableState.FROZEN)) {
				return state.onAlternated ? this.BACKGROUND_COLOR_EVEN : this.BACKGROUND_COLOR_ODD;
			} else {
				return null;
			}
		}
	}

	static getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	static getBorderColor(state: DBaseStateSet): number | null {
		return this.BORDER_COLOR;
	}

	static getBorderMask(state: DBaseStateSet): DBorderMask {
		if (state.is(DTableState.END)) {
			return DBorderMask.ALL;
		} else {
			return DBorderMask.NOT_RIGHT;
		}
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
			return 0x646464;
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
	}

	static getHeight(): DCoordinateSize {
		return "padding";
	}

	static getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
