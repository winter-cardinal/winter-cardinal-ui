/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeListItem } from "../../d-list-item";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteImage } from "./d-theme-white-image";

export class DThemeWhiteListItem extends DThemeWhiteImage implements DThemeListItem {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled ) {
			return null;
		} else if( state.isActive ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( state.isFocused || state.isHovered ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
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
}
