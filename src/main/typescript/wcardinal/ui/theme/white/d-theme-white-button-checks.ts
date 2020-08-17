import { DisplayObject, Texture } from "pixi.js";
import { DBaseStateSet } from "../../d-base-state-set";
import { UtilRgb } from "../../util/util-rgb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

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

export class DThemeWhiteButtonChecks {
	static readonly IMAGE_TINT_COLOR_FOCUSED = UtilRgb.darken( DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR, 0.1 );

	static getImageTintColor( state: DBaseStateSet ): number | null {
		if( state.inDisabled || state.inReadOnly || ! state.isActive ) {
			if( state.isFocused ) {
				return this.IMAGE_TINT_COLOR_FOCUSED;
			} else {
				return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
			}
		} else {
			return DThemeWhiteConstants.HIGHLIGHT_COLOR;
		}
	}

	static getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.isActive ) {
			return DThemeWhiteAtlas.mappings.button_check_mark_on;
		} else {
			return DThemeWhiteAtlas.mappings.button_check_mark_off;
		}
	}
}
