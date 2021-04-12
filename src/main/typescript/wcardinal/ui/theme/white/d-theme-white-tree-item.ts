/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTreeItem } from "../../d-tree-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteLayoutHorizontal } from "./d-theme-white-layout-horizontal";

export class DThemeWhiteTreeItem extends DThemeWhiteLayoutHorizontal implements DThemeTreeItem {
	getBackgroundColor(state: DBaseStateSet): number | null {
		if (state.inDisabled) {
			return null;
		} else if (state.isActive) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if (state.isFocused || state.isHovered) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha(state: DBaseStateSet): number {
		return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getHeight(): DCoordinateSize {
		return 30;
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getCornerMask(): number {
		return DCornerMask.ALL;
	}

	getInteractive(): DBaseInteractive {
		return DBaseInteractive.BOTH;
	}

	getPaddingByLevel(level: number): number {
		return level * 15;
	}
}
