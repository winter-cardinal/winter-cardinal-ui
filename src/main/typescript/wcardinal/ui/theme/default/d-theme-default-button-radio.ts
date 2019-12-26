/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeButtonRadio } from "../../d-button-radio";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeDefaultAtlas } from "./d-theme-default-atlas";
import { DThemeDefaultButtonAmbient } from "./d-theme-default-button-ambient";
import { DThemeDefaultConstants } from "./d-theme-default-constants";
import { DThemeDefaultFont } from "./d-theme-default-font";

// Material Design icons by Google.
// Apache license version 2.0.
DThemeDefaultAtlas.add( "button_radio_mark_on", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48` +
			` 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8` +
			` 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
	`</g>`
);

DThemeDefaultAtlas.add( "button_radio_mark_off", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42` +
			` 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="#fff" />` +
	`</g>`
);

export class DThemeDefaultButtonRadio extends DThemeDefaultButtonAmbient implements DThemeButtonRadio {
	readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken( DThemeDefaultConstants.WEAK_HIGHLIGHT_COLOR, 0.1 );

	getBackgroundColor( state: DBaseState ): number | null {
		return DThemeDefaultConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getColor( state: DBaseState ): number {
		return DThemeDefaultFont.getColor( state );
	}

	getBackgroundAlpha( state: DBaseState ): number {
		if( ! DBaseStates.isDisabled( state ) ) {
			if( DBaseStates.isFocused( state ) || DBaseStates.isHovered( state ) ) {
				return DThemeDefaultConstants.WEAK_HIGHLIGHT_ALPHA;
			}
		}
		return 0;
	}

	getImageTintColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) || ! DBaseStates.isActive( state ) ) {
			if( DBaseStates.isFocused( state ) ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			} else {
				return DThemeDefaultConstants.WEAK_HIGHLIGHT_COLOR;
			}
		} else {
			return DThemeDefaultConstants.HIGHLIGHT_COLOR;
		}
	}

	isToggle(): boolean {
		return true;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActive( state ) ) {
			return DThemeDefaultAtlas.mappings.button_radio_mark_on;
		} else {
			return DThemeDefaultAtlas.mappings.button_radio_mark_off;
		}
	}
}
