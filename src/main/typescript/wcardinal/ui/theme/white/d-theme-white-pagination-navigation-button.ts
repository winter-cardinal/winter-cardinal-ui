/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DBaseState } from "../../d-base-state";
import { DThemePaginationNavigationButton } from "../../d-pagination-navigation-button";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

DThemeWhiteAtlas.add( "pagination_navigation_button_previous", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="13 15 7 10 13 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_next", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="7 15 13 10 7 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_go_first", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="11 15 5 10 11 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="15 15 9 10 15 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_go_last", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="9 15 15 10 9 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="2" points="5 15 11 10 5 5"></polyline>` +
	`</g>`
);
export class DThemeWhitePaginationNavigationButton
			extends DThemeWhiteButtonAmbient implements DThemePaginationNavigationButton {

	getWidth() {
		return 30;
	}

	getHeight() {
		return 30;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return null;
	}
}
