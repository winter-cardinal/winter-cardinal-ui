/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonAmbient } from "../../d-button-ambient";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonAmbient extends DThemeDarkButtonBase implements DThemeButtonAmbient {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		if( state.isActive ) {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		} else {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
		}
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		if( state.inEnabled ) {
			if( state.isActive ) {
				return 1.0;
			} else if( state.isPressed ) {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA * 2;
			} else if( state.isFocused || state.isHovered ) {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}
}
