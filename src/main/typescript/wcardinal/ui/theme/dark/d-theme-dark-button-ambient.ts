/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonAmbient extends DThemeDarkButtonBase implements DThemeButtonAmbient {
	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isActive( state ) ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
		}
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isActive( state ) ) {
				return 1.0;
			} else if( DBaseStates.isPressed( state ) ) {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA * 2;
			} else if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}
}
