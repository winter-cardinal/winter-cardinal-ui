/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";

DThemeDarkAtlas.add( "menu_item_mark_check_active", 14, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="1 6.5 5 11 13 2.5"></polyline>` +
	`</g>`
);

DThemeDarkAtlas.add( "menu_item_mark_check_inactive", 14, 14,
	`<g></g>`
);

export class DThemeDarkMenuItemCheck extends DThemeDarkMenuItemText implements DThemeMenuItemCheck {
	protected getBackgroundColorActive( state: DBaseStateSet ): number | null {
		if( state.isFocused || state.isHovered ) {
			return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	protected getBackgroundAlphaActive( state: DBaseStateSet ): number {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	protected getColorActive( state: DBaseStateSet ): number {
		return DThemeDarkConstants.COLOR;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.isActive ) {
			return DThemeDarkAtlas.mappings.menu_item_mark_check_active;
		}
		return DThemeDarkAtlas.mappings.menu_item_mark_check_inactive;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageMarginHorizontal(): number {
		return 7;
	}
}
