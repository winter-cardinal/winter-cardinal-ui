/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeInputSearch } from "../../d-input-search";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkConstants } from "./d-theme-dark-constants";
import { DThemeDarkInputText } from "./d-theme-dark-input-text";

// Material Design icons by Google.
// Apache license version 2.0.
/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("input_search", 21, 21,
	`<g transform="scale(0.875,0.875)">` +
		`<path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 ` +
		`9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 ` +
		`14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" fill="#fff"/>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkInputSearch extends DThemeDarkInputText implements DThemeInputSearch {
	getPaddingRight(): number {
		return 31;
	}

	getImageTintColor(state: DBaseStateSet): number {
		return DThemeDarkConstants.WEAK_HIGHLIGHT_COLOR;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.input_search;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.BORDER;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageMarginHorizontal(): number {
		return 6;
	}
}
