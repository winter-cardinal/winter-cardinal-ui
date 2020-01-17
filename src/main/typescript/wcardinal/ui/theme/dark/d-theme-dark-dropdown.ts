/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeDropdown } from "../../d-dropdown";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonBase } from "./d-theme-dark-button-base";

DThemeDarkAtlas.add( "dropdown_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);

export class DThemeDarkDropdown extends DThemeDarkButtonBase implements DThemeDropdown {
	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.RIGHT;
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getImageMarginHorizontal(): number {
		return - this.getPaddingRight() * 0.5;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.dropdown_mark;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}

	getTextValue( state: DBaseState ): string {
		return "";
	}
}
