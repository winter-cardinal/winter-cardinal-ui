/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonBack } from "../../d-picker-datetime-button-back";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButtonAmbient } from "./d-theme-dark-button-ambient";

DThemeDarkAtlas.add( "picker_date_back", 24, 24,
	`<g>` +
		`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fff" />` +
	`</g>`
);

export class DThemeDarkPickerDatetimeButtonBack
	extends DThemeDarkButtonAmbient implements DThemePickerDatetimeButtonBack {
	getWidth(): DCoordinateSize {
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
		return DThemeDarkAtlas.mappings.picker_date_back;
	}

	getColor(): number {
		return 0xDEDEDE;
	}
}
