/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackVertical } from "../../d-slider-track-vertical";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";

export class DThemeDarkSliderTrackVertical extends DThemeDarkSliderTrack implements DThemeSliderTrackVertical {
	getWidth(): DCoordinateSize {
		return 5;
	}

	getX(): DCoordinatePosition {
		return "CENTER";
	}

}
