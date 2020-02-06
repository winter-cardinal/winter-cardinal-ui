/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSliderRange } from "./d-theme-white-slider-range";

export class DThemeWhiteSliderRangeVertical extends DThemeWhiteSliderRange implements DThemeWhiteSliderRangeVertical {

	getHeight(): DCoordinateSize {
		return 322;
	}

	getWidth(): DCoordinateSize {
		return 35;
	}

}
