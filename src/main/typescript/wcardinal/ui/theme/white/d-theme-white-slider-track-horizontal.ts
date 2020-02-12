/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderTrackHorizontal } from "../../d-slider-track-horizontal";
import { DThemeWhiteSliderTrack } from "./d-theme-white-slider-track";

export class DThemeWhiteSliderTrackHorizontal
extends DThemeWhiteSliderTrack implements DThemeSliderTrackHorizontal {

	getHeight(): DCoordinateSize {
		return 5;
	}

	getX(): DCoordinatePosition {
		return 0;
	}

}
