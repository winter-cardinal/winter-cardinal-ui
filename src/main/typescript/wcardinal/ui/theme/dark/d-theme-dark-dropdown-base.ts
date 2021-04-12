/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

/* eslint-disable prettier/prettier */
DThemeDarkAtlas.add("dropdown_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeDarkDropdownBase<TEXT_VALUE = unknown>
	extends DThemeDarkButtonBase<TEXT_VALUE>
	implements DThemeDropdownBase<TEXT_VALUE> {
	constructor() {
		super(DThemeDarkConstants.BACKGROUND_COLOR_ON_BOARD);
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
		return DThemeDarkAtlas.mappings.dropdown_mark;
	}
}
