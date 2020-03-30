/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeMenuBarItem } from "../../d-menu-bar-item";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteMenuBarItem extends DThemeWhiteButton implements DThemeMenuBarItem {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	getBorderColor(): number | null {
		return null;
	}

	getWidth(): DCoordinateSize {
		return "auto";
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
	}

	getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}

	getTextAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}
}
