/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackHorizontal } from "../../d-slider-track-horizontal";
import { DThemeDarkSliderTrack } from "./d-theme-dark-slider-track";

export class DThemeDarkSliderTrackHorizontal
extends DThemeDarkSliderTrack implements DThemeSliderTrackHorizontal {
	getX(): DCoordinatePosition {
		return 0;
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return "100%";
	}

	getHeight(): DCoordinateSize {
		return 5;
	}
}
