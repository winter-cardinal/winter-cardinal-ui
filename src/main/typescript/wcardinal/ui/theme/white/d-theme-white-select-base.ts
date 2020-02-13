/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DThemeSelectBase } from "../../d-select-base";
import { DStateAwareOrValueMightBe } from "../../d-state-aware";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonBase } from "./d-theme-white-button-base";

DThemeWhiteAtlas.add( "select_mark", 20, 14,
	`<g>` +
		`<polyline fill="none" stroke="#fff" stroke-width="1" points="16 5 10 11 4 5"></polyline>` +
	`</g>`
);

export class DThemeWhiteSelectBase extends DThemeWhiteButtonBase implements DThemeSelectBase {
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
		return DThemeWhiteAtlas.mappings.select_mark;
	}

	newTextValue(): DStateAwareOrValueMightBe<string> {
		return "";
	}

	getTextValue( state: DBaseState ): string {
		return "";
	}
}
