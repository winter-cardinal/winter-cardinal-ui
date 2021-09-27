/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackVertical } from "../../d-slider-track-vertical";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";

export class DThemeDarkSliderTrackVertical<VALUE = unknown>
	extends DThemeDarkSliderTrack<VALUE>
	implements DThemeSliderTrackVertical<VALUE>
{
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return 0;
	}

	getWidth(): DCoordinateSize {
		return 5;
	}

	getHeight(): DCoordinateSize {
		return "100%";
	}
}
