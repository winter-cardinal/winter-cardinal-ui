/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteConstants } from "./d-theme-white-constants";
import { DThemeWhiteMenuItemText } from "./d-theme-white-menu-item-text";

DThemeWhiteAtlas.add( "menu_item_mark_check_active", 14, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="1 6.5 5 11 13 2.5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "menu_item_mark_check_inactive", 14, 14,
	`<g></g>`
);

export class DThemeWhiteMenuItemCheck extends DThemeWhiteMenuItemText implements DThemeMenuItemCheck {
	protected getBackgroundColorActive( state: DBaseStateSet ): number | null {
		if( state.isFocused || state.isHovered ) {
			return DThemeWhiteConstants.WEAK_HIGHLIGHT_COLOR;
		} else {
			return null;
		}
	}

	protected getBackgroundAlphaActive( state: DBaseStateSet ): number {
		return DThemeWhiteConstants.WEAK_HIGHLIGHT_ALPHA;
	}

	protected getColorActive( state: DBaseStateSet ): number {
		return DThemeWhiteConstants.COLOR;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		if( state.isActive ) {
			return DThemeWhiteAtlas.mappings.menu_item_mark_check_active;
		} else {
			return DThemeWhiteAtlas.mappings.menu_item_mark_check_inactive;
		}
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageMarginHorizontal(): number {
		return 7;
	}
}
