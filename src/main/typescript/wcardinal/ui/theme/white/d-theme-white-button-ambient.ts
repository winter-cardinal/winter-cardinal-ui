/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

export class DThemeWhiteButtonAmbient extends DThemeWhiteButtonBase implements DThemeButtonAmbient {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		} else {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isActive( state ) ) {
				return 1.0;
			} else if( DBaseStates.isPressed( state ) ) {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA * 2;
			} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
