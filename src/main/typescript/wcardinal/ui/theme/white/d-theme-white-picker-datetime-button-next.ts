/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinate } from "../../d-coordinate";
import { DThemePickerDatetimeButtonNext } from "../../d-picker-datetime-button-next";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

DThemeWhiteAtlas.add( "picker_date_next", 24, 24,
	`<g>` +
		`<path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" fill="#fff" />` +
	`</g>`
);

export class DThemeWhitePickerDatetimeButtonNext
	extends DThemeWhiteButtonAmbient implements DThemePickerDatetimeButtonNext {
	getWidth(): DCoordinate {
		return "auto";
	}

	getImageAlignWith(): DAlignWith {
		return DAlignWith.PADDING;
	}

	getImageMarginHorizontal(): number {
		return 0;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.LEFT;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.picker_date_next;
	}

	getColor(): number {
		return 0x6f6f6f;
	}
}
