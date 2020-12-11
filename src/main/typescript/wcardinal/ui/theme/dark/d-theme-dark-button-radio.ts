/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeButtonRadio } from "../../d-button-radio";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDarkAtlas.add( "button_radio_mark_on", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48` +
			` 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8` +
			` 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
	`</g>`
);

DThemeDarkAtlas.add( "button_radio_mark_off", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42` +
			` 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
	`</g>`
);

export class DThemeDarkButtonRadio extends DThemeDarkButtonAmbient implements DThemeButtonRadio {
	protected readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken( DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR, 0.1 );

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
		if( state.inDisabled || ! state.isActive ) {
			if( state.isFocused ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			} else {
				return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
			}
		} else {
			return DThemeDarkConstants.HIGHLIGHT_COLOR;
		}
	}

	isToggle(): boolean {
		return true;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.isActive ) {
			return DThemeDarkAtlas.mappings.button_radio_mark_on;
		} else {
			return DThemeDarkAtlas.mappings.button_radio_mark_off;
		}
	}
}
