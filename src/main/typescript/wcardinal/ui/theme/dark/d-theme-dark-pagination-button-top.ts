/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import type { DisplayObject, Texture } from "pixi.js";
import type { DBaseStateSet } from "../../d-base-state-set";
import type { DCoordinateSize } from "../../d-coordinate";
import type { DThemePaginationButtonTop } from "../../d-pagination-button-top";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("pagination_button_top", 21, 21,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="11 15 5 10 11 5"></polyline>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="15 15 9 10 15 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkPaginationButtonTop
	extends DThemeDarkButtonAmbient<string>
	implements DThemePaginationButtonTop
{
	getWidth(): DCoordinateSize {
		return 30;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.pagination_button_top;
	}
}
