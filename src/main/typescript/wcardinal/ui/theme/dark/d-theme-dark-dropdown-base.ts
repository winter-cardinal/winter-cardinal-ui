/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeDropdownBase } from "../../d-dropdown-base";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";

DThemeDarkAtlas.add( "dropdown_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);

export abstract class DThemeDarkDropdownBase<TEXT_VALUE> extends DThemeDarkButtonBase
	implements DThemeDropdownBase<TEXT_VALUE> {
	getSecondaryImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getSecondaryImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getSecondaryImageMarginHorizontal(): number {
		return - this.getPaddingRight() * 0.5;
	}

	getSecondaryImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.dropdown_mark;
	}

	abstract newTextValue(): DStateAwareOrValueMightBe<TEXT_VALUE>;
	abstract getTextValue( state: DBaseState ): TEXT_VALUE;
}
