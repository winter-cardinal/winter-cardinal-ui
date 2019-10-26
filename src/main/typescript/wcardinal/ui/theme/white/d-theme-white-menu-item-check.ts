/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
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
	getBackgroundColor( state: DBaseState ): number | null {
		return super.getBackgroundColor( state & ~DBaseState.ACTIVE );
	}

	getColor( state: DBaseState ): number {
		return super.getColor( state & ~DBaseState.ACTIVE );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActive( state ) ) {
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
