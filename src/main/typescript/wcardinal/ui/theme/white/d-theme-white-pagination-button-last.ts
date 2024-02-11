/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DisplayObject, Texture } from "pixi.js";
import type { DBaseStateSet } from "../../d-base-state-set";
import type { DCoordinateSize } from "../../d-coordinate";
import type { DThemePaginationButtonTop } from "../../d-pagination-button-top";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("pagination_button_last", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="9 15 15 10 9 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="5 15 11 10 5 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhitePaginationButtonLast
	extends DThemeWhiteButtonAmbient<string>
	implements DThemePaginationButtonTop
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.pagination_button_last;
	}
}
