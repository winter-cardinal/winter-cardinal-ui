/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinatePosition, DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteSliderThumb extends DThemeWhiteButton implements DThemeSliderThumb {
	getX(): DCoordinatePosition {
		return "CENTER";
	}

	getY(): DCoordinatePosition {
		return "CENTER";
	}

	getWidth(): DCoordinateSize {
		return 15;
	}

	getHeight(): DCoordinateSize {
		return 15;
	}

	getBackgroundColor( state: DBaseState ): number | null {
		if( DBaseStates.isDisabled( state ) ) {
			return 0xAAAAAA;
		}
		return 0x3399FF;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

	getCornerRadius(): number {
		return 7.5;
	}

}
