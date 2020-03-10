/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderHorizontal } from "../../d-slider-horizontal";
import { DThemeDarkSlider } from "./d-theme-dark-slider";

export class DThemeDarkSliderHorizontal extends DThemeDarkSlider implements DThemeSliderHorizontal {
	getHeight(): DCoordinateSize {
		return 33;
	}

	getWidth(): DCoordinateSize {
		return 300;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}
}
