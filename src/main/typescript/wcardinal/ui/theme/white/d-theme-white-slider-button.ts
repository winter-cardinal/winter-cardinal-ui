/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeWhiteButton } from "./d-theme-white-button";

export class DThemeWhiteSliderButton extends DThemeWhiteButton implements DThemeWhiteSliderButton {

	getBackgroundColor( state: DBaseState ): number | null {
		return 0x3399FF;
	}

	getBorderColor( state: DBaseState ): number | null {
		return null;
	}

    getHeight(): DCoordinateSize {
		return 15;
	}

	getWidth(): DCoordinateSize {
		return 15;
	}
	
    getCornerRadius(): number {
		return 15;
	}

}
