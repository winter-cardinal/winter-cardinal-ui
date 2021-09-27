/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";
import { DThemeWhiteConstants } from "./d-theme-white-constants";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("dropdown_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteDropdownBase<TEXT_VALUE = unknown>
	extends DThemeWhiteButtonBase<TEXT_VALUE>
	implements DThemeDropdownBase<TEXT_VALUE>
{
	constructor() {
		super(DThemeWhiteConstants.BACKGROUND_COLOR_ON_BOARD);
	}

	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return -20;
	}

	getPaddingLeft(): number {
		return 25;
	}

	getPaddingRight(): number {
		return 25;
	}

	getSecondaryImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.dropdown_mark;
	}
}
