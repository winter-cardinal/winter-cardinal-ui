/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderVertical } from "../../d-slider-vertical";
import { DThemeDarkSlider } from "./d-theme-dark-slider";

export class DThemeDarkSliderVertical extends DThemeDarkSlider implements DThemeSliderVertical {
	getHeight(): DCoordinateSize {
		return 322;
	}

	getWidth(): DCoordinateSize {
		return 35;
	}
}
