/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";

export class DThemeWhiteSliderTrackVertical extends DThemeWhiteSliderTrack implements DThemeWhiteSliderTrackVertical {

	getHeight(): DCoordinateSize {
		return 300;
	}

	getWidth(): DCoordinateSize {
		return 5;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}

}
