/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSliderRange } from "./d-theme-white-slider-range";

export class DThemeWhiteSliderRangeHorizontal
extends DThemeWhiteSliderRange implements DThemeWhiteSliderRangeHorizontal {

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
