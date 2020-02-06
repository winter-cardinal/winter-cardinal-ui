/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSlider } from "./d-theme-white-slider";

export class DThemeWhiteSliderHorizontal extends DThemeWhiteSlider implements DThemeWhiteSliderHorizontal {
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
