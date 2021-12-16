/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteSliders } from "./d-theme-white-sliders";

/* eslint-disable prettier/prettier */
DThemeWhiteAtlas.add("slider_thumb", 16, 16,
	`<circle cx="8" cy="8" r="7.5" stroke="none" fill="#ffffff" />`
);
/* eslint-enable prettier/prettier */

export class DThemeWhiteSliderThumb<VALUE = unknown>
	extends DThemeWhiteButton<VALUE>
	implements DThemeSliderThumb<VALUE>
{
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return 16;
	}

	getHeight(): DCoordinateSize {
		return 16;
	}

	getBackgroundColor(state: DBaseStateSet): number | null {
		return null;
	}

	getBorderColor(state: DBaseStateSet): number | null {
		return null;
	}

	getImageSource(state: DBaseStateSet): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.slider_thumb;
	}

	getImageTintColor(state: DBaseStateSet): number | null {
		return DThemeWhiteSliders.getBackgroundColor(state, true);
	}

	getImageTintAlpha(state: DBaseStateSet): number {
		return 1;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}

	getOutlineOffset(state: DBaseStateSet): number {
		return this.getOutlineOffsetNonActive(state) + 2;
	}
}
