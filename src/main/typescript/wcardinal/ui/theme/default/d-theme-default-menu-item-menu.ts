/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeMenuItemMenu } from "../../d-menu-item-menu";
import { DThemeDefaultAtlas } from "./d-theme-default-atlas";
import { DThemeDefaultMenuItem } from "./d-theme-default-menu-item";

DThemeDefaultAtlas.add( "menu_item_mark_next", 14, 20,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="5 16 11 10 5 4"></polyline>` +
	`</g>`
);

export class DThemeDefaultMenuItemMenu extends DThemeDefaultMenuItem implements DThemeMenuItemMenu {
	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDefaultAtlas.mappings.menu_item_mark_next;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageMarginHorizontal(): number {
		return 12;
	}
}
