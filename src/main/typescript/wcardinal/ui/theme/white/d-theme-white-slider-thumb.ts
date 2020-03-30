/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeWhiteAtlas } from "./d-theme-white-atlas";
import { DThemeWhiteButton } from "./d-theme-white-button";
import { DThemeWhiteSliders } from "./d-theme-white-sliders";

DThemeWhiteAtlas.add( "slider_thumb", 16, 16,
	`<circle cx="8" cy="8" r="7.5" stroke="none" fill="#ffffff" />`
);

export class DThemeWhiteSliderThumb extends DThemeWhiteButton implements DThemeSliderThumb {
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

	getBackgroundColor( state: DBaseState ): number | null {
		return null;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getImageSource( state: DBaseState ): Texture | DisplayObject | null {
		return DThemeWhiteAtlas.mappings.slider_thumb;
	}

	getImageTintColor( state: DBaseState ): number | null {
		return DThemeWhiteSliders.getBackgroundColor( state | DBaseState.ACTIVE );
	}

	getImageTintAlpha( state: DBaseState ): number {
		return 1;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
