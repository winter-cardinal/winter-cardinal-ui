/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DisplayObject, Texture } from "pixi.js";
import { DAlignHorizontal } from "../../d-align-horizontal";
import { DBaseStateSet } from "../../d-base-state-set";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeDarkAtlas } from "./d-theme-dark-atlas";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkSliders } from "./d-theme-dark-sliders";

DThemeDarkAtlas.add( "slider_thumb", 16, 16,
	`<circle cx="8" cy="8" r="7.5" stroke="none" fill="#ffffff" />`
);

export class DThemeDarkSliderThumb extends DThemeDarkButton implements DThemeSliderThumb {
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

	getBackgroundColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getBorderColor( state: DBaseStateSet ): number | null {
		return null;
	}

	getImageSource( state: DBaseStateSet ): Texture | DisplayObject | null {
		return DThemeDarkAtlas.mappings.slider_thumb;
	}

	getImageTintColor( state: DBaseStateSet ): number | null {
		return DThemeDarkSliders.getBackgroundColor( state, true );
	}

	getImageTintAlpha( state: DBaseStateSet ): number {
		return 1;
	}

	getImageAlignHorizontal(): DAlignHorizontal {
		return DAlignHorizontal.CENTER;
	}
}
