/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSliderTrackSelected } from "./d-theme-white-slider-track-selected";

export class DThemeWhiteSliderTrackSelectedHorizontal
extends DThemeWhiteSliderTrackSelected implements DThemeWhiteSliderTrackSelectedHorizontal {

	getHeight(): DCoordinateSize {
		return 5;
	}

	getWidth(): DCoordinateSize {
		return 150;
	}

	getX(): DCoordinatePosition {
		return 0;
	}

}
