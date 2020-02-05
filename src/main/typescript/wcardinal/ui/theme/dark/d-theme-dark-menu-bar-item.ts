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
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkMenuBarItem extends DThemeDarkButton implements DThemeMenuBarItem {
	COLOR = 0x000000;
	COLOR_HOVERED = UtilRgb.brighten( this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA );
	COLOR_PRESSED = UtilRgb.brighten( this.COLOR, DThemeDarkConstants.PRESSED_ALPHA );

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		}
		if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
		if( DBaseStates.isPressed( state ) ) {
			return this.COLOR_PRESSED;
		}
		if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		}
		return null;
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
