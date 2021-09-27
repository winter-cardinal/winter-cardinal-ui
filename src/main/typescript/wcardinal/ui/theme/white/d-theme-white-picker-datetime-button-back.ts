/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DAlignWith } from "../../d-align-with";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemePickerDatetimeButtonBack } from "../../d-picker-datetime-button-back";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButtonAmbient } from "./d-theme-white-button-ambient";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("picker_date_back", 24, 24,
	`<g>` +
		`<path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" fill="#fff" />` +
	`</g>`
);
/* eslint-enable prettier/prettier */

export class DThemeWhitePickerDatetimeButtonBack<VALUE = unknown>
	extends DThemeWhiteButtonAmbient<VALUE>
	implements DThemePickerDatetimeButtonBack<VALUE>
{
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

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.picker_date_back;
	}

	getAlpha(state: DBaseStateSet): number {
		return super.getAlpha(state) * 0.9;
	}
}
