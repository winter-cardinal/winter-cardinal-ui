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
import { DThemeDefaultAtlas } from "./d-theme-default-atlas";
import { DThemeDefaultButtonAmbient } from "./d-theme-default-button-ambient";

DThemeDefaultAtlas.add( "picker_date_back", 24, 24,
	`<g>` +
		`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fff" />` +
	`</g>`
);

export class DThemeDefaultPickerDatetimeButtonBack
	extends DThemeDefaultButtonAmbient implements DThemePickerDatetimeButtonBack {
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
		return DThemeDefaultAtlas.mappings.picker_date_back;
	}

	getColor(): number {
		return this.dThemeConfiguration.getPickerDatetimeButtonBackColor();
	}
}
