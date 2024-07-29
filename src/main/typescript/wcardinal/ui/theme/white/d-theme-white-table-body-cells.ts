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
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteTableBodyCells {
	protected static readonly BACKGROUND_COLOR = DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD;
	protected static readonly BACKGROUND_COLOR_FROZEN_EVEN = UtilRgb.darken(
		this.BACKGROUND_COLOR,
		0.015
	);
	protected static readonly BACKGROUND_COLOR_FROZEN_ODD = UtilRgb.darken(
		this.BACKGROUND_COLOR_FROZEN_EVEN,
		0.015
	);
	protected static readonly BORDER_COLOR = UtilRgb.darken(this.BACKGROUND_COLOR, 0.035);
	protected static readonly BORDER_COLOR_FROZEN = UtilRgb.darken(this.BORDER_COLOR, 0.035);

	static getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			if (state.is(DTableState.FROZEN)) {
				return state.onAlternated
					? this.BACKGROUND_COLOR_FROZEN_ODD
					: this.BACKGROUND_COLOR_FROZEN_EVEN;
			} else {
				return null;
			}
		} else if (state.isInvalid) {
			return DThemeWhiteConstants.INVALID_BLENDED_ON_BOARD;
		} else if (state.underActive) {
			return DThemeWhiteConstants.HIGHLIGHT_BLENDED_ON_BOARD;
		} else if (state.onHovered || state.isHovered) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_BLENDED_ON_BOARD;
		} else {
			if (state.is(DTableState.FROZEN)) {
				return state.onAlternated
					? this.BACKGROUND_COLOR_FROZEN_ODD
					: this.BACKGROUND_COLOR_FROZEN_EVEN;
			} else {
				return null;
			}
		}
	}

	static getBackgroundAlpha(state: DBaseStateSet): number {
		return 1;
	}

	static getBorderColor(state: DBaseStateSet): number | null {
		if (state.is(DTableState.FROZEN_END)) {
			return this.BORDER_COLOR_FROZEN;
		}
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
		return DThemeWhiteConstants.COLOR;
	}

	static getAlpha(state: DBaseStateSet): number {
		if (state.in(DTableState.HAS_DATA)) {
			if (state.inEnabled) {
				return 1.0;
			} else {
				return 0.5;
			}
		}
		return 0;
	}

	static getImageTintColor(state: DBaseStateSet, isActive?: boolean): number | null {
		if (state.inDisabled || state.inReadOnly || !(state.isActive || isActive)) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		}
	}

	static getHeight(): DCoordinateSize {
		return "padding";
	}

	static getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
