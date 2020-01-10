/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeMenuItemCheck } from "../../d-menu-item-check";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
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
	getBackgroundColor( state: DBaseState ): number | null {
		return super.getBackgroundColor( state & ~DBaseState.ACTIVE );
	}

	getColor( state: DBaseState ): number {
		return super.getColor( state & ~DBaseState.ACTIVE );
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActive( state ) ) {
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
