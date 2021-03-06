/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeMenuItemMenu } from "../../d-menu-item-menu";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkMenuItem } from "./d-theme-dark-menu-item";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("menu_item_mark_next", 14, 20,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="5 16 11 10 5 4"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkMenuItemMenu extends DThemeDarkMenuItem implements DThemeMenuItemMenu {
	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.menu_item_mark_next;
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
