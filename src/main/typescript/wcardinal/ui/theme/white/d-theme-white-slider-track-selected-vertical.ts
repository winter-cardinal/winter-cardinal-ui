/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteSliderTrackSelectedVertical
extends DThemeWhiteButton implements DThemeWhiteSliderTrackSelectedVertical {

	getBackgroundColor( state: DBaseState ): number | null {
		return 0x3399FF;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getColor( state: DBaseState ): number {
		return 0x5F5F5F;
	}

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
