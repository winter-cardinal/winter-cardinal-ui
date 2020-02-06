/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSliderTrackSelected } from "./d-theme-white-slider-track-selected";

export class DThemeWhiteSliderTrackSelectedVertical
extends DThemeWhiteSliderTrackSelected implements DThemeWhiteSliderTrackSelectedVertical {

	getHeight(): DCoordinateSize {
		return 150;
	}

	getWidth(): DCoordinateSize {
		return 5;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}

}
