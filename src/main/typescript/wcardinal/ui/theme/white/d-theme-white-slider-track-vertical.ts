/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackVertical } from "../../d-slider-track-vertical";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";

export class DThemeWhiteSliderTrackVertical<VALUE = unknown>
	extends DThemeWhiteSliderTrack<VALUE>
	implements DThemeSliderTrackVertical<VALUE> {
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
