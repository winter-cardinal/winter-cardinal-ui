/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseInteractive } from "../../d-base-interactive";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner-mask";
import { DThemeTreeItem } from "../../d-Tree-item";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkLayoutHorizontal } from "./d-theme-dark-layout-horizontal";

export class DThemeDarkTreeItem extends DThemeDarkLayoutHorizontal implements DThemeTreeItem {
	COLOR = 0x383838;
	COLOR_HOVERED = UtilRgb.darken( this.COLOR, DThemeDarkConstants.FOCUSED_ALPHA );
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return null;
		} else if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
			return this.COLOR_HOVERED;
		} else {
			return null;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		return 0.8;
	}

	getBorderColor( state: DBaseState ): number | null {
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

	getPaddingLeft(): number {
		return 10;
	}

	getPaddingRight(): number {
		return 10;
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
