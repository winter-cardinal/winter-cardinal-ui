/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DThemePaginationNavigationButton } from "../../d-pagination-navigation-button";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

DThemeWhiteAtlas.add( "pagination_navigation_button_previous", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="13 15 7 10 13 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_next", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="7 15 13 10 7 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_go_first", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="11 15 5 10 11 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="15 15 9 10 15 5"></polyline>` +
	`</g>`
);

DThemeWhiteAtlas.add( "pagination_navigation_button_go_last", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="9 15 15 10 9 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="5 15 11 10 5 5"></polyline>` +
	`</g>`
);
export class DThemeWhitePaginationNavigationButton<VALUE = unknown> extends DThemeWhiteButtonAmbient<VALUE>
	implements DThemePaginationNavigationButton<VALUE> {

}
