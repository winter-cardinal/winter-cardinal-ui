/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DLinkMenuItemId } from "../../d-link-menu-item-id";
import { DMenuOptions } from "../../d-menu";
import { DThemeMenuItemLink } from "../../d-menu-item-link";
import { DMenuItemLinkState } from "../../d-menu-item-link-state";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkLinks } from "./d-theme-dark-links";
import { DThemeDarkMenuItemText } from "./d-theme-dark-menu-item-text";

DThemeDarkAtlas.add( "menu_item_mark_link", 24, 24,
	`<g>` +
		`<path fill="none" stroke="#fff" stroke-width="1" ` +
			`d="M10 6H7c-1.11 0-2 .9-2 2v8c0 1.1.89 2 2 2h8c1.1 0 2-.9 2-2v-3 M19 11V4h-7 M18.75 4.5l-8 8" />` +
	`</g>`
);

export class DThemeDarkMenuItemLink extends DThemeDarkMenuItemText implements DThemeMenuItemLink {
	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		if( state & DMenuItemLinkState.NEW_WINDOW ) {
			return DThemeDarkAtlas.mappings.menu_item_mark_link;
		}
		return null;
	}

	getImageTintAlpha( state: DBaseState ): number {
		if( state & DBaseState.HOVERED ) {
			return super.getImageTintAlpha( state );
		}
		return 0;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getMenuOptions(): DMenuOptions<DLinkMenuItemId> {
		return DThemeDarkLinks.getMenuOptions();
	}
}
