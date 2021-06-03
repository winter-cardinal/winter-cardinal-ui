/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuItemBase } from "../../d-menu-item-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteMenuItemBase
	extends DThemeWhiteImage<string>
	implements DThemeMenuItemBase {
	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isActive) {
			return this.getBackgroundColorActive(state);
		} else if (state.isFocused || state.isHovered) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	protected getBackgroundColorActive(state: DBaseStateSet): number | null {
		return DThemeWhiteConstants.HIGHLIGHT_COLOR;
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		if (state.inDisabled) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
		} else if (state.isActive) {
			return this.getBackgroundAlphaActive(state);
		} else {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
		}
	}

	protected getBackgroundAlphaActive(state: DBaseStateSet): number {
		return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
	}

	getColor(state: DBaseStateSet): number {
		if (state.inDisabled) {
			return DThemeWhiteConstants.COLOR;
		} else if (state.isActive) {
			return this.getColorActive(state);
		} else {
			return DThemeWhiteConstants.COLOR;
		}
	}

	protected getColorActive(state: DBaseStateSet): number {
		return DThemeWhiteConstants.COLOR;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "padding";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getCursor(state: DBaseStateSet): string {
		if (!state.isActionable) {
			return "";
		}
		return "pointer";
	}
}
