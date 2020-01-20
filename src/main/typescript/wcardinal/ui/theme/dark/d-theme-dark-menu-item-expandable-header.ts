/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DThemeMenuItemExpandableHeader } from "../../d-menu-item-expandable-header";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkListItem } from "./d-theme-dark-list-item";

DThemeDarkAtlas.add( "menu_item_expandable_header_closed", 14, 14,
	`<g transform="scale(1, 0.7)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="6 16 10 10 6 4"></polyline>` +
	`</g>`
);

DThemeDarkAtlas.add( "menu_item_expandable_header_opened", 14, 14,
	`<g transform="scale(0.7, 1)">` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 6 10 10 4 6"></polyline>` +
	`</g>`
);

export class DThemeDarkMenuItemExpandableHeader extends DThemeDarkListItem implements DThemeMenuItemExpandableHeader {
	getPaddingLeft(): number {
		return this.getPaddingRight();
	}

	getPaddingRight(): number {
		return 26;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( DBaseStates.isActiveIn( state ) ) {
			return DThemeDarkAtlas.mappings.menu_item_expandable_header_opened;
		}
		return DThemeDarkAtlas.mappings.menu_item_expandable_header_closed;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageMarginHorizontal(): number {
		return 7;
	}
}
