/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonCheck } from "../../d-button-check";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";
import { DThemeWhiteButtonChecks } from "./d-theme-white-button-checks";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteFont } from "./d-theme-white-font";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeWhiteAtlas.add( "button_check_mark_on", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89` +
			`-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" fill="#fff" />` +
	`</g>`
);

DThemeWhiteAtlas.add( "button_check_mark_off", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z" ` +
			`fill="#fff" />` +
	`</g>`
);

export class DThemeWhiteButtonCheck extends DThemeWhiteButtonAmbient implements DThemeButtonCheck {
	getBackgroundColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getColor( state: DBaseStateSet ): number {
		return DThemeWhiteFont.getColor( state );
	}

	getBackgroundAlpha( state: DBaseStateSet ): number {
		if( state.inEnabled ) {
			if( state.isFocused || state.isHovered ) {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeWhiteButtonChecks.getImageTintColor( state );
	}

	isToggle(): boolean {
		return true;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeWhiteButtonChecks.getImageSource( state );
	}
}
