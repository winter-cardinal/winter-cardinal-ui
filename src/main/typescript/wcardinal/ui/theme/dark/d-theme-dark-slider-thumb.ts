/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBaseState } from "../../d-base-state";
import { DBaseStates } from "../../d-base-states";
import { DCoordinateSize } from "../../d-coordinate";
import { DThemeSliderThumb } from "../../d-slider-thumb";
import { DThemeDarkButton } from "./d-theme-dark-button";
import { DThemeDarkConstants } from "./d-theme-dark-constants";

export class DThemeDarkSliderThumb extends DThemeDarkButton implements DThemeSliderThumb {

	getBackgroundColor( state: DBaseState ): number | null {
		if(DBaseStates.isDisabled(state)) {
			return 0x646464;
		}
		return DThemeDarkConstants.HIGHLIGHT_COLOR;
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
