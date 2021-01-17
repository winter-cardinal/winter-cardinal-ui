/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonCheck } from "../../d-button-check";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkButtonChecks } from "./d-theme-dark-button-checks";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkButtonCheck<VALUE> extends DThemeDarkButtonAmbient<VALUE> implements DThemeButtonCheck<VALUE> {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeDarkConstants.COLOR;
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		if( state.inEnabled ) {
			if( state.isFocused || state.isHovered ) {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkButtonChecks.getImageTintColor( state );
	}

	isToggle(): boolean {
		return true;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeDarkButtonChecks.getImageSource( state );
	}
}
