/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DBorderMask } from "../../d-border";
import { DCoordinateSize } from "../../d-coordinate";
import { DCornerMask } from "../../d-corner";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";

export class DThemeWhiteTableBodyCells {
	static readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken( DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.1 );

	static getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isInvalid( state ) ) {
			return DThemeWhiteConstants.INVALID_COLOR;
		} else if( state & DBaseState.ACTIVE_IN ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		}
	}

	static getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isPressed( state ) || DBaseStates.isFocused( state ) ) {
				return DThemeWhiteConstants.HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	static getBorderColor( state: DBaseState ): number | null {
		return 0xf6f6f6;
	}

	static getBorderAlign( state: DBaseState ): number {
		return 0.5;
	}

	static getBorderMask( state: DBaseState ): DBorderMask {
		return DBorderMask.TOP_BOTTOM;
	}

	static getColor( state: DBaseState ): number {
		return DThemeWhiteFont.getColor( state );
	}

	static getAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			return DThemeWhiteFont.getAlpha( state );
		}
		return 0;
	}

	static getImageTintColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || DBaseStates.isReadOnly( state ) || ! DBaseStates.isActive( state ) ) {
			if( DBaseStates.isFocused( state ) ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			} else {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
			}
		} else {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		}
	}

	static getOutlineAlign( state: DBaseState ): number {
		return -2;
	}

	static getHeight(): DCoordinateSize {
		return "padding";
	}

	static getCornerMask(): DCornerMask {
		return DCornerMask.ALL;
	}
}
